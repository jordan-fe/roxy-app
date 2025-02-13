import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-galerie',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './galerie.component.html',
  standalone: true,
  styleUrl: './galerie.component.scss'
})
export class GalerieComponent implements OnInit {
  readonly basePath = 'assets/galerie/';
  images: string[] = [];

  selectedImage: string | null = null; // Image actuellement en plein écran

  ngOnInit(): void {
    for (let i = 1; i <= 5; i++) {
      this.images.push('galerie-' + i + '.jpg');
    }
  }

  // Ouvrir l'image en plein écran
  openFullScreen(image: string): void {
    this.selectedImage = image;
  }

  // Fermer l'image en plein écran
  closeFullScreen(): void {
    this.selectedImage = null;
  }
}
