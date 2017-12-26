import { SettingsService } from './../../services/settings.service';
import { UploadService } from './../../services/upload.service';
import { Upload } from './../../services/upload';
import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../services/patient.service';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { Patient } from '../../models/Patient';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TextMaskModule } from 'angular2-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  
  patient: Patient= {
    firstName:'',
    lastName:'',
    ssn: '',
    mediacalState:'',
    carePlan:'',
    phoneNumber:'',
    email:'',
    birthday:''
  }
  disableCareplanOnAdd: boolean = false;

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public patientService: PatientService,
    private _titleService: Title,
    private upSvc: UploadService,
    public setting: SettingsService
  ) { }

  ngOnInit() {
    this._titleService.setTitle('HealthCare | Add patient');
    this.disableCareplanOnAdd = this.setting.getSettings().disableCareplanOnAdd;
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
    public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public birthday = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
}
