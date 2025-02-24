import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-info',
    imports: [
        RouterLink
    ],
  templateUrl: './home-info.component.html',
  standalone: true,
  styleUrl: './home-info.component.scss'
})
export class HomeInfoComponent {

}
