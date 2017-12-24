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
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor( private upSvc: UploadService) { }

  detectFiles($event: Event) {
    this.selectedFiles = ($event.target as HTMLInputElement).files;
}

uploadSingle() {
  const file = this.selectedFiles;
  if (file && file.length === 1) {
    this.currentUpload = new Upload(file.item(0));
    this.upSvc.pushUpload(this.currentUpload);
  } else {
    console.error('No file found!');
  }
}


  ngOnInit() {
  }
}
