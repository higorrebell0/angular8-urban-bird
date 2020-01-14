import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';
import { Observable, Observer, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [ OffersService ]
})
export class OfferComponent implements OnInit, OnDestroy {
  public offer: Offer;

  // we inject the services when the component is built to tell the angular
  // that he needs to pass the information to the component
  constructor(
    private route: ActivatedRoute,
    private service: OffersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.service.getOfferById(params.id)
      .then(( offer: Offer ) => {
        this.offer = offer;
        console.log(offer);
      });
    });
  }

  ngOnDestroy() {
  }
}
