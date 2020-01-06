import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

// metadata sent to component class through @Component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OffersService ]
  // setting the service as provider to the component father and childs
})
export class HomeComponent implements OnInit {

  public offers: Array<Offer>;
  public offersPromiseSync: Array<Offer>;

  constructor(private offersService: OffersService) { }
  ngOnInit() {
    this.offersService.getOffers()
      .then( (data: Array<Offer>) => {
        this.offers = data;
      })
      .catch((param: any) => {
      });
  }
}
