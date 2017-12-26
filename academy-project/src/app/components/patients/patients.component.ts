import { Component, OnInit,  ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { Title } from "@angular/platform-browser";
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/Patient';
import { FilterPipe } from './../../pipes/filter.pipe';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent implements OnInit {
  patients:any[];
  totalPatients: number;
  

  constructor(
    public patientService: PatientService,
    private _titleService: Title,
    public element: ElementRef
  ) {}

  ngOnInit() {
    this._titleService.setTitle('HealthCare | Patients');
    this.patientService.getPatients().subscribe(patients => {
    this.patients = patients;
    this.getTotalPatients();
    });
  }
  getTotalPatients(){
    let total = this.patients.length;
    this.totalPatients = total;
  }
}
