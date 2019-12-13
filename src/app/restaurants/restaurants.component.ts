import { Component, OnInit } from '@angular/core';
import { Offer } from '../shared/offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [ OffersService ]
})
export class RestaurantsComponent implements OnInit {
  public restaurantsOffers: Array<Offer>;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory('restaurants')
      .then((data: Array<Offer>) => { this.restaurantsOffers = data; });
  }

}
