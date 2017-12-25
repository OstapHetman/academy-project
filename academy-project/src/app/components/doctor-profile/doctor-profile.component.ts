import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UploadService } from './../../services/upload.service';
import { Upload } from './../../services/upload';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.sass']
})
export class DoctorProfileComponent implements OnInit {
  constructor( private upSvc: UploadService) { }
  ngOnInit() {
  }
}
