// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

// AngularFire Imports
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database-deprecated";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

// Service Imports
import { PatientService } from './services/patient.service';
import { AuthService } from './services/auth.service';



const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'my-profile', component: DoctorProfileComponent, outlet: 'content'},
    { path: 'patients', component: PatientsComponent, outlet: 'content' },
    { path: 'add-patient', component: AddPatientComponent, outlet: 'content' },
    { path: 'patient/:id', component: PatientDetailsComponent, outlet: 'content' }
  ]}
 ];

 const firebaseConfig = {
  apiKey: "AIzaSyC4MbVD7ssn4-R1ju49MsNQHDzQt8-rfX4",
  authDomain: "healthcare-dfe17.firebaseapp.com",
  databaseURL: "https://healthcare-dfe17.firebaseio.com",
  projectId: "healthcare-dfe17",
  storageBucket: "",
  messagingSenderId: "984140954066"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SliderComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    PatientsComponent,
    DoctorProfileComponent,
    AddPatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [AngularFireAuth,AngularFireDatabase,PatientService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
