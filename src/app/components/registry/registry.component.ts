import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const s = document.createElement("script");
    s.id = 'script_myregistry_giftlist_iframe';
    s.type = 'text/javascript';
    s.src = '//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=4e7gjY5Dq4xswOIdeZHvIw2&v=2';
    this.elementRef.nativeElement.appendChild(s);
  }

}
