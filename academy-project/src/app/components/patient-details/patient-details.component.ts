import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../services/patient.service';
import { Patient } from './../../models/Patient';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  id: string;
  patient: Patient;

  constructor(
    public patientService: PatientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // GetId
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.patientService.getPatient(this.id).subscribe(patient =>{
    
      this.patient = patient;  
      console.log(this.patient);
    });
  }

}
