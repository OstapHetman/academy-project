import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../services/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = {
    firstName:'',
    lastName:'',
    ssn: 1234567890,
    mediacalState:''
  }

  constructor() { }

  ngOnInit() {
  }

}
