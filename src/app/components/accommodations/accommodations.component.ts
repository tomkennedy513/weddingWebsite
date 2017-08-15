import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const divToChange1 = document.getElementsByTagName('html');
    divToChange1.item(0).className="";
    divToChange1.item(0).style.overflow='scroll';
    const divToChange2 = document.getElementsByTagName('body');
    divToChange2.item(0).className="";
    divToChange2.item(0).style.overflow='scroll'
  }

}
