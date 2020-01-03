import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './shared/offer.model';

import { SERVER_URL } from './app.api';

@Injectable()
export class OffersService {
  private offers;

  constructor(private http: HttpClient) { }

  public getOffers(): Promise<Array<Offer>> {
    // make a http request and return a promise Array<Offer>
    return this.http.get<Array<Offer>>(`${SERVER_URL}/offers`)
      .toPromise()
      .then((response: any) => response );
  }

  public getOffersByCategory(category: string): Promise<Array<Offer>> {
    return this.http.get(`${SERVER_URL}/offers?category=${category}`)
      .toPromise()
      .then((response: any) => response );
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http.get(`${SERVER_URL}/offers?id=${id}`)
      .toPromise()
      .then((response: any) => response.shift());
  }

  public getHowUseId(id: number): Promise<string> {
    return this.http.get(`${SERVER_URL}/how-use?id=${id}`)
      .toPromise()
      .then((response: any) => response.shift().description);
  }

  public getWhereId(id: number): Promise<string> {
    return this.http.get(`${SERVER_URL}/where?id=${id}`)
      .toPromise()
      .then((response: any) => response.shift().description);
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
