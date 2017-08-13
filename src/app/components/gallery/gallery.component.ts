import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageArrowsAutoHide: true,
        thumbnailsArrowsAutoHide: true,
        thumbnailsSwipe: true,
        previewSwipe: true,
        previewCloseOnEsc: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/bridal_party_photos/lars.jpg',
        medium: 'assets/images/bridal_party_photos/lars.jpg',
        big: 'assets/images/bridal_party_photos/lars.jpg'
      },
      {
        small: 'assets/images/bridal_party_photos/emma.jpg',
        medium: 'assets/images/bridal_party_photos/emma.jpg',
        big: 'assets/images/bridal_party_photos/emma.jpg'
      },
      {
        small: 'assets/images/bridal_party_photos/pete.jpg',
        medium: 'assets/images/bridal_party_photos/pete.jpg',
        big: 'assets/images/bridal_party_photos/pete.jpg'
      }
    ];
  }

}
