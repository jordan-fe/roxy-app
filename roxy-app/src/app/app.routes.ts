import { Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {TarifComponent} from "./tarif/tarif.component";
import {HomeComponent} from "./home/home.component";
import {GalerieComponent} from './galerie/galerie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarif', component: TarifComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: '**', redirectTo: '' }
];
