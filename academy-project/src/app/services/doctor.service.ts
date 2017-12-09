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
  newDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
  getDoctor(id:string) {
    this.doctor = this.db.object('doctors/'+id) as FirebaseObjectObservable<Doctor>;
    return this.doctor;
    }

    deleteDoctor (id: string) {
      return this.doctors.remove(id);
      }
  updateDoctor(id: string, doctor: Doctor) {
    return this.doctors.update(id, doctor);
  }

}
