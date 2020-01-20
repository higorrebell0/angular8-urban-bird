import { Order } from './shared/order.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from './app.api';
import { map } from 'rxjs/operators';

@Injectable()
export class BuyOrderService {

  constructor(private http: HttpClient) { }

  public completeBuy(order: Order): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      `${SERVER_URL}/orders`,
      JSON.stringify(order),
      ({ headers })
    ).pipe(map((response: Response) => response['id']));
  }
}
