import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import { HeaderComponent } from './components/homepage/header/header.component';
import { CountdownComponent } from './components/homepage/countdown/countdown.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LocationComponent } from './components/homepage/location/location.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BridalPartyComponent } from './components/bridal-party/bridal-party.component';
import { AccomodationsComponent } from './components/accomodations/accomodations.component';
import { RegistryComponent } from './components/registry/registry.component';

var firebaseConfig = {
    apiKey: "AIzaSyBH7AQqaXhHr_AqCV3ZQGz6MPmS12EVrHs",
    authDomain: "weddingwebsite-c22ed.firebaseapp.com",
    databaseURL: "https://weddingwebsite-c22ed.firebaseio.com",
    projectId: "weddingwebsite-c22ed",
    storageBucket: "weddingwebsite-c22ed.appspot.com",
    messagingSenderId: "473457069419"
  };



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountdownComponent,
    HomepageComponent,
    LocationComponent,
    RsvpComponent,
    GalleryComponent,
    BridalPartyComponent,
    AccomodationsComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
