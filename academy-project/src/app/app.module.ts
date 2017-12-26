
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Title } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

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
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { WeatherComponent } from './components/weather/weather.component';

// Service Imports
import { PatientService } from './services/patient.service';
import { DoctorService } from './services/doctor.service';
import { AuthService } from './services/auth.service';
import { UploadService } from './services/upload.service';
import { WeatherService } from './services/weather.service';
import { AuthGuard } from './guards/auth.guard';
import { FilterPipe } from './pipes/filter.pipe';


const routes: Routes = [
  { path: '', component: SliderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    { path: 'my-profile', component: DoctorProfileComponent, outlet: 'content', canActivate: [AuthGuard]},
    { path: 'patients', component: PatientsComponent, outlet: 'content', canActivate: [AuthGuard] },
    { path: 'doctors', component: DoctorsComponent, outlet: 'content', canActivate: [AuthGuard] },
    { path: 'add-patient', component: AddPatientComponent, outlet: 'content', canActivate: [AuthGuard] },
    { path: 'add-doctor', component: AddDoctorComponent, outlet: 'content', canActivate: [AuthGuard] },
    { path: 'patient/:id', component: PatientDetailsComponent, outlet: 'content', canActivate: [AuthGuard], },
    { path: 'weather', component: WeatherComponent, outlet: 'content', canActivate: [AuthGuard], },
    { path: 'settings', component: SendMessageComponent, outlet: 'content', canActivate: [AuthGuard], },
    { path: 'doctor/:id', component: DoctorDetailsComponent, outlet: 'content', canActivate: [AuthGuard] }
  ]}
 ];

 const firebaseConfig = {
  apiKey: "AIzaSyC4MbVD7ssn4-R1ju49MsNQHDzQt8-rfX4",
  authDomain: "healthcare-dfe17.firebaseapp.com",
  databaseURL: "https://healthcare-dfe17.firebaseio.com",
  projectId: "healthcare-dfe17",
  storageBucket: "healthcare-dfe17.appspot.com",
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
    PatientDetailsComponent,
    FilterPipe,
    DoctorsComponent,
    AddDoctorComponent,
    DoctorDetailsComponent,
    SendMessageComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    HttpModule,
    TextMaskModule
  ],
  providers: [AngularFireAuth,AngularFireDatabase,PatientService,DoctorService,AuthService,Title, AuthGuard, UploadService, WeatherService, HttpClientModule, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
