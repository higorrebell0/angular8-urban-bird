import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FunComponent } from './fun/fun.component';
import { OfferComponent } from './offer/offer.component';
import { HowUseComponent } from './offer/how-use/how-use.component';
import { WhereComponent } from './offer/where/where.component';
import { BuyOrderComponent } from './buy-order/buy-order.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'fun', component: FunComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'offer/:id', component: OfferComponent,
    children: [
      { path: '', component: HowUseComponent },
      { path: 'how-use', component: HowUseComponent },
      { path: 'where', component: WhereComponent },
    ]
  },
  { path: 'buy-order', component: BuyOrderComponent }
];
