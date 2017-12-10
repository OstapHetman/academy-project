import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import { Patient } from '../models/Patient';

@Injectable()
export class PatientService {
  patients: FirebaseListObservable<any[]>;
  patient: FirebaseObjectObservable<any>;

  constructor(public db:AngularFireDatabase) {
    this.patients = this.db.list('patients') as FirebaseListObservable<Patient[]>;
  }

  getPatients(){
    return this.patients;
  }

  newPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getPatient(id:string) {
    this.patient = this.db.object('/patients/'+id) as FirebaseObjectObservable<Patient>;
    return this.patient;
  }  

  deletePatient (id: string) {
    return this.patients.remove(id);
  }

  updatePatient(id: string, patient: Patient) {
    return this.patients.update(id, patient);
  }
}
