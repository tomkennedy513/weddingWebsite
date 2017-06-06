import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  timeUntil;
  constructor() { }

  ngOnInit() {
    let weddingDate = new Date(2018,8,22,14);
    console.log(weddingDate);
    let currentDate = new Date();
    this.timeUntil = Math.floor((+weddingDate - +currentDate)/(1000*60*60*24));

  }

}
