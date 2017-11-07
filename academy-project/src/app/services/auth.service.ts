import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  // Login user
  constructor(public afAuth: AngularFireAuth) { }
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

}
