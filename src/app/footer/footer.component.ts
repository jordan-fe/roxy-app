import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly facebook = "https://www.facebook.com/people/Roxy-Toilettage/61571036911063/";
  readonly instagram = "https://www.instagram.com/roxytoilettage?igsh=MTh0aDh2OHF5cXY2aA==";
  readonly horaires: {
    jourLabel: string,
    heure?: string
  }[] = [{
    jourLabel: "Lundi",
    heure: "13h00 - 17h00"
  }, {
    jourLabel: "Mardi",
    heure: "09h00 - 17h00"
  }, {
    jourLabel: "Mercredi",
    heure: "09h00 - 17h00"
  }, {
    jourLabel: "Jeudi"
  }, {
    jourLabel: "Vendredi",
    heure: "09h00 - 17h00"
  }, {
    jourLabel: "Samedi",
    heure: "09h00 - 12h00"
  }, {
    jourLabel: "Dimanche",
  }]
}
