import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { MedicalRecord } from '../models/MedicalRecord';
import { PetType } from '../models/PetType';
import { PetSize } from '../models/PetSize';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordsService {
  url: string;

  constructor(
    private http: HttpClient,
    
  ) { 
    this.url = "http://localhost:8000/api/medicalRecords";
  }

  getAll() : Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(this.url)
      .pipe(
        map(response => {
          return response.map( (item) => {
            const type = new PetType(item.pet_type);
            const size = new PetSize(item.pet_size);
            const owner = new User(item.user);            
            item.pet_type = type;
            item.pet_size = size;
            item.user = owner;

            return new MedicalRecord(item);
          } )
        }),
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(httpError: HttpErrorResponse) {
    let msg = ""
    if(httpError.error instanceof ErrorEvent) {
      msg = `'An error ocurred:  ${httpError.error.message}`;
      console.error('An error ocurred: ', httpError.error.message);
      
    }else {
      msg = `Api returned error code ${httpError.status},
        body was: ${httpError.error}`;
        console.error(msg);
      return throwError(
        httpError.error.message
      )
    }
    
}
}
