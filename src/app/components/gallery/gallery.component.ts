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
      },
      {
          src: '/assets/img/gallery/IMG_1545.jpg'
      },
      {
          src: '/assets/img/gallery/jan 2015.JPG'
      },
      {
          src: '/assets/img/gallery/jan 2016.jpeg'
      }, 
      {
          src: '/assets/img/gallery/mar 2016+.jpg'
      },
      {
          src: '/assets/img/gallery/march 2015.jpg'
      },
      {
          src: '/assets/img/gallery/May 2013.JPG'
      },
      {
          src: '/assets/img/gallery/May 2014.JPG'
      },
      {
          src: '/assets/img/gallery/May 2016.jpg'
      },
      {
          src: '/assets/img/gallery/nov 2016.JPG'
      },
      {
          src: '/assets/img/gallery/nov 2016 2.JPG'
      },
      {
          src: '/assets/img/gallery/oct 2013.JPG'
      },
      {
          src: '/assets/img/gallery/oct 2017.JPG'
      },
      {
          src: '/assets/img/gallery/sept 2015.jpg'
      },
      {
          src: '/assets/img/gallery/september 2012.JPG'
      }
      
  ];

  ngOnInit() {

  }

}
