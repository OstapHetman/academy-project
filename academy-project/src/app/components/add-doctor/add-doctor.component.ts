import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../services/doctor.service';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { Doctor } from '../../models/Doctor';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  doctor: Doctor= {
    firstName:'',
    lastName:'',
    username:'',
    password:'',
    confirmPassword:'',
    email:''
  }
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public doctorService: DoctorService,
    private _titleService: Title
  ) { }

  ngOnInit() {
    // this._titleService.setTitle('HealthCare | Add patient');
  }

  onSubmit({value, valid}: {value:Doctor, valid:boolean}) {
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: 'add-patient'}}]);
    } else {
      // Add new client
      this.doctorService.newDoctor(value);
      this.flashMessagesService.show('New doctor added', {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['patients']}}]);
    }
    }

}
