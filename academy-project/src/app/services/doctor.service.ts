import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import { Doctor } from '../models/Doctor';


@Injectable()
export class DoctorService {

  doctors: FirebaseListObservable<any[]>;
  doctor: FirebaseObjectObservable<any>;
  constructor(public db:AngularFireDatabase) {
    this.doctors = this.db.list('doctors') as FirebaseListObservable<Doctor[]>;
   }
   getDoctors(){
    return this.doctors;
  }
  // newPatient(patient: Patient) {
  //   this.patients.push(patient);
  // }
  // getPatient(id:string) {
  //   this.patient = this.db.object('/patients/'+id) as FirebaseObjectObservable<Patient>;
  //   return this.patient;
  //   }

}
