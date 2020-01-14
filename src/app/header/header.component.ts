import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Observable, Subject, of } from 'rxjs';
import { Offer } from '../shared/offer.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OffersService ]
})
export class HeaderComponent implements OnInit {

  public offers: Observable<Array<Offer>>;
  public arrayOffers: Array<Offer>;
  private subjectSearch: Subject<string> = new Subject<string>();

  constructor(private service: OffersService) { }

  ngOnInit() {
    this.offers = this.subjectSearch // return array<offer>
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap( // switchmap is called when the next of the subject execute
        (searchTerm: string) => {
          if (searchTerm.trim() === '') {
            return of<Array<Offer>>([]);
          }
          return this.service.searchOffers(searchTerm);
        }
      ),
      catchError(
        (err: any) => {
          console.log(err);
          return of<Array<Offer>>([]);
        }
      )
    );

    this.offers.subscribe((offers: Array<Offer>) => {
      this.arrayOffers = offers;
    });
  }

  public search(searchString: string): void {
    this.subjectSearch.next(searchString);
  }

  public clearSearch(): void {
    this.subjectSearch.next('');
  }

}
