import { Upload } from './upload';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  constructor(private af: AngularFireDatabase, private db: AngularFireDatabase) { }
  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;
  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress);
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
