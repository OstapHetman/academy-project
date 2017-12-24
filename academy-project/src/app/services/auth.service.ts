import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Doctor } from './../models/Doctor';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";

@Injectable()
export class AuthService {

  doctor: Doctor= {
    firstName:'',
    lastName:'',
    username:'',
    password:'',
    confirmPassword:'',
    email:''
  }

  // Login user
  constructor(
    public afAuth: AngularFireAuth,
    public db:AngularFireDatabase
  ) { }
    
  login(email: string, password: string) {
    return new Promise ((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  // Check User status
   getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  // Logout User
  logout() {
    this.afAuth.auth.signOut();
  }

  // Register User
  register(email: string, password: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
  });
  
}

}
