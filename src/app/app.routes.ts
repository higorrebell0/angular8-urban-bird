import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FunComponent } from './fun/fun.component';
import { OfferComponent } from './offer/offer.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'fun', component: FunComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'offer/:id', component: OfferComponent }
];
