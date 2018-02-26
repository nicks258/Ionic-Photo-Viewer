import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ImageViewerController, IonicImageViewerModule} from 'ionic-img-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoomAreaModule } from 'ionic2-zoom-area';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    BrowserAnimationsModule,
    ZoomAreaModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    IonicImageViewerModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
