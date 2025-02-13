import { Component } from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {HomeInfoComponent} from './home-info/home-info.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, HomeInfoComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
