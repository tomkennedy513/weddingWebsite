import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountdownComponent } from './countdown/countdown.component';

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
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
