import {Component, inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from "@angular/router";
import {PhoneButtonComponent} from './phone-button/phone-button.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, PhoneButtonComponent],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  router = inject(Router);
  navMenuConfig: {
    label: string,
    link: string
  }[] = [{
    label: "Accueil",
    link: "/"
  }, {
    label: "Galerie",
    link: "/galerie"
  },{
    label: "Services",
    link: "/mes-services"
  }, {
    label: "Contact",
    link: "/contact"
  }]

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    })
  }

  closeMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    }
  }

  toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }

  goToHome() {
    this.router.navigateByUrl("/");
  }
}
