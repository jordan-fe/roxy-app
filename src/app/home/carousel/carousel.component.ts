import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  standalone: true,
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  currentIndex = 0; // Index de l'image actuellement affichée

  // Liste des images pour le carousel
  images = [
    'assets/carousel/image1.jpg',
    'assets/carousel/image2.jpg',
    'assets/carousel/image3.jpg',
  ];

  // Méthode pour aller à l'image suivante
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Méthode pour aller à l'image précédente
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
