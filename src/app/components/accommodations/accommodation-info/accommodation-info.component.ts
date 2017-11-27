import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accommodation-info',
  templateUrl: './accommodation-info.component.html',
  styleUrls: ['./accommodation-info.component.css']
})
export class AccommodationInfoComponent implements OnInit {
  @Input() name: string;
  @Input() photoUrl: string;
  @Input() aboutParagraph: string;
  @Input() address: string;
  @Input() phone: string;
  @Input() website: string;
  mapAddress: string;
  showMap: boolean = false;
  constructor() { 
  }

  ngOnInit() {
  }

  handleMapClick(){    
  
    window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(this.address))
    
  }
  
  handleWebClick(){
    window.open(this.website);
  }

  handlePhoneClick(){
    window.open("tel:" + this.phone)
  }

}
