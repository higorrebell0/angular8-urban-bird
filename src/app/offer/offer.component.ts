import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private timeObservableSubs: Subscription;
  private observTestSubs: Subscription;

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

    // this.route.params.subscribe(
    //   (param: any) => { console.log(param); },
    //   (error: any) => console.log(error),
    //   () => console.log('processamento foi concluído!')
    // );

    let time = interval(2000);
    this.timeObservableSubs = time.subscribe((inter: number) => {
      console.log(inter);
    });

    // observable
    let observTest = new Observable(
      (observer: Observer<any>) => {
        observer.next('Primeiro evento da stream'); // next() trigger an event of the event stream
        observer.error('algum erro encontrado na stream de eventos');
      }
    );

    // observable observer
    observTest.subscribe(
      (res: any) => console.log(res),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    );
  }

  ngOnDestroy() {
    this.observTestSubs.unsubscribe();
    this.timeObservableSubs.unsubscribe();
  }
}
