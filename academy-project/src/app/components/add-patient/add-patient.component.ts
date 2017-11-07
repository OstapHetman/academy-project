import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../services/patient.service';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { Patient } from '../../models/Patient';
import { FlashMessagesService } from 'angular2-flash-messages';


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
    mediacalState:'',
    carePlan:''
  }

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public patientService: PatientService,
    private _titleService: Title
  ) { }

  ngOnInit() {
    this._titleService.setTitle('HealthCare | Add patient');
  }
  onSubmit({value, valid}: {value:Patient, valid:boolean}) {
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: 'add-patient'}}]);
    } else {
      // Add new client
      this.patientService.newPatient(value);
      this.flashMessagesService.show('New patient added', {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['patients']}}]);
    }
    }

}
