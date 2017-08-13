import { Component, OnInit } from '@angular/core';
import 'hammerjs';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  constructor() { }


  images = [
    {
      src: '/assets/img/gallery/IMG_0631.JPG',
      text: 'See Sunset View'
    },
    {
      src: '/assets/img/gallery/IMG_0632.JPG',
      text: 'See Sunset View'
    },
    {
      src: '/assets/img/gallery/IMG_0633.JPG',
      text: 'See Sunset View'
    },
    {
      src: '/assets/img/gallery/IMG_0634.JPG',
      text: 'See Sunset View'
    }
    ]

  ngOnInit() {
  }

}
