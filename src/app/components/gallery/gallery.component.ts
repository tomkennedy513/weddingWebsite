import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  constructor() { }


  images = [
    {
      src: '/assets/img/gallery/IMG_0631.JPG'
    },
    {
      src: '/assets/img/gallery/IMG_0632.JPG'
    },
    {
      src: '/assets/img/gallery/IMG_0633.JPG'
    },
    {
      src: '/assets/img/gallery/IMG_0634.JPG'
    },
    {
      src: '/assets/img/gallery/IMG_0636.JPG'
    },
    {
      src: '/assets/img/gallery/IMG_0637.JPG'
    },
    {
      src: '/assets/img/gallery/IMG_0638.JPG'
    }
    ];

  ngOnInit() {

  }

}
