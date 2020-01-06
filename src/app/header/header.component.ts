import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Observable } from 'rxjs';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OffersService ]
})
export class HeaderComponent implements OnInit {

  public offers: Observable<Array<Offer>>;

  constructor(private service: OffersService) { }

  ngOnInit() {
  }

  public search(searchString: string): void {
    // console.log((event.target as HTMLInputElement).value);
    // console.log(searchString);
    this.offers = this.service.searchOffers(searchString);
    this.offers.subscribe(
      (response: Array<Offer>) => console.log(response),
      (erro: any) => console.log('Erro status: ', erro.status),
      () => console.log('Event stream complete.')
    );
  }

}
