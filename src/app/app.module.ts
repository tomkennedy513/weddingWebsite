import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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


const firebaseConfig = {
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
    HomepageComponent,
    RsvpComponent,
    GalleryComponent,
    BridalPartyComponent,
    AccommodationsComponent,
    RegistryComponent,
    MemberComponent,
    NavbarComponent,
    AccommodationInfoComponent
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
