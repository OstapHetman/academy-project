// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'my-profile', component: DoctorProfileComponent, outlet: 'content'},
    { path: 'patients', component: PatientsComponent, outlet: 'content' }
  ]}
  // { path: 'new-analysis', component: PatientsComponent },
  // { path: 'patients', component: PatientsComponent },
  // { path: 'patients', component: PatientsComponent }
 ];

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
    DoctorProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
