import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [ OffersService ]
})
export class OfferComponent implements OnInit {

  public offer: Offer;

  // we inject the services when the component is built to tell the angular
  // that he needs to pass the information to the component
  constructor(
    private route: ActivatedRoute,
    private service: OffersService
  ) { }

  ngOnInit() {
    this.service.getOfferById(this.route.snapshot.params.id)
      .then(( offer: Offer ) => {
        this.offer = offer;
        console.log(offer);
     });
  }

}
