import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureAudioOptions } from '@ionic-native/media-capture';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';

// API
//import { Service } from '../../services/soonly.service';

// Pages
import { MyCalendarsSendPage } from '../myCalendarsSend/myCalendarsSend';
import { CreateMessagePage } from '../createMessage/createMessage';

@Component({
  selector: 'page-createBox',
  templateUrl: 'createBox.html',
  providers: [[Camera], [MediaCapture], [Base64]]
})
export class CreateBoxPage implements OnInit {

  // variables
  username: string;
  mCapture: MediaCapture;
  b64: Base64;
  test: MediaCapture;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public mediaCapture: MediaCapture, public base64: Base64, public storage: Storage) {
    this.mCapture = mediaCapture;
    this.b64 = base64;
  }

  ngOnInit(): void {
  }

  // Move back
  showBack(name: string) : void {
    this.navCtrl.pop();
  }

  // Move to createMessage page
  showCreateMessage(name: string) : void {
    this.navCtrl.push(CreateMessagePage);
  }

  // Open audio
  openAudio() : void {
    this.mCapture.captureAudio()
      .then(
        (data: MediaFile[]) => this.test,
        (err: CaptureError) => console.error(err)
      );
  }

  // Open camera photo
  openCamera() : void {
    let options: CaptureImageOptions = { limit: 1 };
    this.mCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => this.validImage(data),
        (err: CaptureError) => console.error(err)
      );
  }

  // Create base64File variable (picture taken in base64)
  validImage(medias : MediaFile[]) : void {
    this.b64.encodeFile(medias[0].fullPath).then((base64File: string) => {
      this.navCtrl.push(MyCalendarsSendPage, {
        img: medias[0].fullPath,
        base64: base64File
      });
    }, (err) => {
      console.log(err);
    });
  }
}
