import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OfferComponent } from './offer/offer.component';
import { HowUseComponent } from './offer/how-use/how-use.component';
import { WhereComponent } from './offer/where/where.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FunComponent,
    RestaurantsComponent,
    OfferComponent,
    HowUseComponent,
    WhereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES) // forRoot global routes of application - forChild intern routes of components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
