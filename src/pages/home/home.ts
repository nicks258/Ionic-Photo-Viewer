import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public photo:PhotoViewer) {
    // this.photo.show('https://mysite.com/path/to/image.jpg');
  }
  zoomImage(imageData) {
    console.log("image->" + imageData);
    // this.photo.show(map_view);
  }
}
