import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../services/doctor.service';
import { Doctor } from './../../models/Doctor';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  id: string;
  doctor: Doctor= {
    firstName:'',
    lastName:'',
    username:'',
    password:'',
    confirmPassword:'',
    email:''
  }
  constructor(
    public doctorService: DoctorService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.doctorService.getDoctor(this.id).subscribe(doctor =>{
        this.doctor = doctor;  
      });
  }

  onDeleteClick() {
    if(confirm("Are you sure to delete?")){
      this.doctorService.deleteDoctor(this.id);
      this.flashMessagesService.show('Doctor Deleted', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['doctors']}}]);
    }
  }

  onSubmit({value, valid}: {value:Doctor, valid:boolean}) {
    if(!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: 'doctor/'+this.doctor.$key}}]);
    } else {
      // Update client
      this.doctorService.updateDoctor(this.id,value);
      this.flashMessagesService.show('Doctor update', {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/dashboard', {outlets: {content: ['doctors']}}]);
    }
  }

}
