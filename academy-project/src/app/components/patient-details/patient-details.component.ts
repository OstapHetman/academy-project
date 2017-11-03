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
  patient: Patient= {
    firstName:'',
    lastName:'',
    ssn: 0,
    mediacalState:'',
    carePlan:''
  }


  constructor(
    public patientService: PatientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatient(this.id).subscribe(patient =>{
        this.patient = patient;  
      });
  }
  onDeleteClick() {
    if(confirm("Are you sure to delete?")){
      this.patientService.deletePatient(this.id);
      this.flashMessagesService.show('Patient Deleted', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['patients']}}]);
    }
  }
  onSubmit({value, valid}: {value:Patient, valid:boolean}) {
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: 'patient/'+this.patient.$key}}]);
    } else {
      // Update client
      this.patientService.updatePatient(this.id,value);
      this.flashMessagesService.show('Patient update', {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['patients']}}]);
    }
  }


}
