import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Title } from "@angular/platform-browser";
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/Doctor';
import { FilterPipe } from './../../pipes/filter.pipe';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors:any[];
  totalDoctors: number;

  constructor(
    public doctorService: DoctorService,
    private _titleService: Title
  ) {}

  ngOnInit() {
    this._titleService.setTitle('HealthCare | Patients');
    this.doctorService.getDoctors().subscribe(doctors => {
    this.doctors = doctors;
    this.getTotalDoctors();
    });
  }
  getTotalDoctors(){
    let total = this.doctors.length;
    this.totalDoctors = total;
  }

}
