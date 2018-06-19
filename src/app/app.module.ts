import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BridalPartyComponent } from './components/bridal-party/bridal-party.component';
import { AccommodationsComponent} from './components/accommodations/accommodations.component';
import { RegistryComponent } from './components/registry/registry.component';
import { MemberComponent } from './components/bridal-party/member/member.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccommodationInfoComponent } from './components/accommodations/accommodation-info/accommodation-info.component';
import { RsvpFormComponent } from './components/rsvp/rsvp-form/rsvp-form.component';
import {HttpClientModule} from "@angular/common/http";
import * as firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBH7AQqaXhHr_AqCV3ZQGz6MPmS12EVrHs",
    authDomain: "weddingwebsite-c22ed.firebaseapp.com",
    databaseURL: "https://weddingwebsite-c22ed.firebaseio.com",
    projectId: "weddingwebsite-c22ed",
    storageBucket: "weddingwebsite-c22ed.appspot.com",
    messagingSenderId: "473457069419"
  };

firebase.initializeApp(firebaseConfig);
const functions = firebase.functions();


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RsvpComponent,
    GalleryComponent,
    BridalPartyComponent,
    AccommodationsComponent,
    RegistryComponent,
    MemberComponent,
    NavbarComponent,
    AccommodationInfoComponent,
    RsvpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
