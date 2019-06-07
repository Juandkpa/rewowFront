import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';

const routes: Routes = [
  {
    path: 'medicalRecords',
    component: MedicalRecordsComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
