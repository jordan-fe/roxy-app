import { Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {GalerieComponent} from './galerie/galerie.component';
import {MyServicesComponent} from './my-services/my-services.component';
import {TermsComponent} from "./terms/terms.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mes-services', component: MyServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', redirectTo: '' }
];
