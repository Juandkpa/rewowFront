import { Component, OnInit } from '@angular/core';
import { MedicalRecordsService } from '../services/medical-records.service';
import { MedicalRecord } from '../models/MedicalRecord';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {

  displayedColums: string[];
  medicalRecords : MedicalRecord[];
  error: any;
  constructor(
    private medicalRecordsService: MedicalRecordsService,        
  ) { }

  ngOnInit() {
    this.displayedColums = ['name', 'owner', 'pet_type', 'pet_size'];
    this.getRecordServices();
  }

  getRecordServices() {
    this.medicalRecordsService.getAll()
    .subscribe(
      (data: MedicalRecord[]) => {
        this.medicalRecords = data;
        console.warn("medicalRecords", this.medicalRecords);
      },
      error => this.error = error
    )
  }

}
