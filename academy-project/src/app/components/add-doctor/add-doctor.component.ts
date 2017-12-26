import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../services/doctor.service';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { Doctor } from '../../models/Doctor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service'; 
import { TextMaskModule } from 'angular2-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})

export class AddDoctorComponent implements OnInit {
  email: string;
  password: string;

  doctor: Doctor= {
    firstName:'',
    lastName:'',
    password:'',
    confirmPassword:'',
    email:'',
    birthday:'',
    phoneNumber:'',
    about:''
  }
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public doctorService: DoctorService,
    private _titleService: Title,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this._titleService.setTitle('HealthCare | Add Doctor');
  }
  // 
  onSubmit({value, valid}: {value:Doctor, valid:boolean}) {
    // this.authService.register(this.email, this.password)
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: 'add-doctor'}}]);
    } else {
      // Add new doctor
      this.authService.register(this.email, this.password)
      this.doctorService.newDoctor(value);
      this.flashMessagesService.show('New doctor added', {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['doctors']}}]);
    }
    }
    public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public birthday = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

}
