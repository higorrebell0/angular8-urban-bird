import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-order-success',
  templateUrl: './buy-order-success.component.html',
  styleUrls: ['./buy-order-success.component.css']
})
export class BuyOrderSuccessComponent implements OnInit {
  @Input() public idOrder;

  constructor() { }

  ngOnInit() {
  }

}
