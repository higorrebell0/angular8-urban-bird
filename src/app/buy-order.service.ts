import { Order } from './shared/order.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from './app.api';

@Injectable()
export class BuyOrderService {

  constructor(private http: HttpClient) { }

  public completeBuy(order: Order): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${SERVER_URL}/orders`, JSON.stringify(order), ({ headers }));
  }
}
