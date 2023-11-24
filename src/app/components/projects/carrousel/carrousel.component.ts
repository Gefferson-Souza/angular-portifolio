import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  images: string[] = [
    'assets/projects/emestone/smartphone.png',
    'assets/projects/emestone/tablet.png',
    'assets/projects/emestone/smartphone.png',
    'assets/projects/emestone/tablet.png',
    'assets/projects/emestone/smartphone.png',
    'assets/projects/emestone/tablet.png',
  ];

  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length

  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    
  }

}
