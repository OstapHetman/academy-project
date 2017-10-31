import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients:any[];
  totalPatients: number;
  constructor(
    public patientService: PatientService
  ) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients => {
    this.patients = patients;
    this.getTotalPatients();
    console.log(this.patients);
    });
  }
  getTotalPatients(){
    let total = this.patients.length;
    this.totalPatients = total;
    console.log(this.patients.length);
  }
}
