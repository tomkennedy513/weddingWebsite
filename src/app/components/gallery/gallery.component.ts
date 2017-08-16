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
    // const divToChange1 = document.getElementsByTagName('html');
    // divToChange1.item(0).className="";
    // divToChange1.item(0).style.overflow='scroll';
    // const divToChange2 = document.getElementsByTagName('body');
    // divToChange2.item(0).className="";
    // divToChange2.item(0).style.overflow='scroll'
  }

}
