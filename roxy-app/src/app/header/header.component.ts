import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PhoneButtonComponent} from './phone-button/phone-button.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, PhoneButtonComponent],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }

}
