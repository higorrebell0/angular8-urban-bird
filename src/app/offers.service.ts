import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './shared/offer.model';

@Injectable()
export class OffersService {
  private SERVER_URL = 'http://localhost:3000/ofertas';
  private offers;

  constructor(private http: HttpClient) { }

  public getOffers(): Promise<Array<Offer>> {
    // make a http request and return a promise Array<Offer>
    return this.http.get(this.SERVER_URL)
      .toPromise()
      .then((response: any) => response );
  }

  public getOffersByCategory(category: string): Promise<Array<Offer>> {
    return this.http.get(this.SERVER_URL + `?category=${category}`)
      .toPromise()
      .then((response: any) => response );
  }

  // ---------------------------------------------------------------------------

  // sync version
  public getOffersPromiseSync(): Promise<Array<Offer>> {
    return new Promise((resolve, reject) => { // expects a callback function, an action
      // some proccess that call the resolve or the reject
      resolve(this.offers);
    });
  }

  // resolve and reject - sync
  public getOffersPromiseSync2(): Promise<Array<Offer>> {
    return new Promise((resolve, reject) => {
      const deuCerto = false;
      if (deuCerto) {
        resolve(this.offers);
      } else {
        reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado.' });
      }
    });
  }

  // simulating async
  public getOffersPromiseAsync(): Promise<Array<Offer>> {
    return new Promise((resolve, reject) => {
      const deuCerto = true;
      if (deuCerto) {
        setTimeout(() => { resolve(this.offers); }, 3000);
      } else {
        reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado.' });
      }
    });
  }
}
