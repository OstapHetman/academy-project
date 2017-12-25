import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import * as $ from 'jquery';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function() {
    //   $("#uploadBtn").hide();
    // });

    // $("#fileInput").on("change", function(event) {
    //  let selectedFile = event.target.files[0];
    //   $("#uploadBtn").show()
    // });
  }

  // changeFile() {
  //   (event) => {
  //     let selectedFile = event.target.files[0];
  //   }
  // } 

  // uploadFile() {
  //   let selectedFile;
  //   let fileName = selectedFile,
  //       storageRef = firebase.storage().ref('/patientsPhoto' + fileName);
  //   let uploadTask = storageRef.put(selectedFile);
    
  //   uploadTask.on('state_changed', (snapshot) =>{
  //       // let progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
  //       // console.log('Upload is ' + progress + '% done');
  //     }, (error) => {
  //       console.log("EROR !!")
  //     }, () => {
  //       // Handle successful uploads on complete
  //       var downloadURL = uploadTask.snapshot.downloadURL;
  //       console.log("successful !!")
  //       });
  // }
  

 
}
