import { Component, OnInit } from '@angular/core';
import {Accommodation } from 'app/components/accommodations/accommodation-info/accommodation';
import { accommodations } from 'app/components/accommodations/accommodations-list';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {
  
  accommodations: [Accommodation]
  constructor() {
    this.accommodations = accommodations;
   }

  ngOnInit() {
  }

 

}
