import { Component, OnInit } from '@angular/core';
import { BuyOrderService } from '../buy-order.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css'],
  providers: [ BuyOrderService ]
})
export class BuyOrderComponent implements OnInit {

  public idOrder: number;

  public address = '';
  public num = '';
  public complement = '';
  public paymentType = '';

  // validation
  public validAddress = false;
  public validNumber = false;
  public validComplement = false;
  public validPayment = false;

  // inicial state (pristine)
  public pristineAddress = true;
  public pristineNumber = true;
  public pristineComplement = true;
  public pristinePayment = true;

  // button control
  public stateForm = 'disabled';
  constructor(private service: BuyOrderService) { }

  ngOnInit() {
  }

  public confirmBuy(): void {
    const order: Order = new Order('', '', '', '');
    order.address = this.address;
    order.num = this.num;
    order.complement = this.complement;
    order.payment = this.paymentType;

    this.service.completeBuy(order)
      .subscribe((idOrder: number) => {
        this.idOrder = idOrder;
      });
  }

  public updateAddress(address: string): void {
    this.address = address;
    this.pristineAddress = false;
    if (this.address.length > 3) {
      this.validAddress = true;
    } else {
      this.validAddress = false;
    }

    this.checkForm();
  }

  public updateNumber(num: string): void {
    this.num = num;
    this.pristineNumber = false;
    if (this.num.length > 0) {
      this.validNumber = true;
    } else {
      this.validNumber = false;
    }

    this.checkForm();
  }

  public updateComplement(complement: string): void {
    this.complement = complement;

    this.checkForm();
  }

  public updatePayment(paymentType: string): void {
    this.paymentType = paymentType;
    this.pristinePayment = false;
    if (this.paymentType.length > 0) {
      this.validPayment = true;
    } else {
      this.validPayment = false;
    }

    this.checkForm();
  }

  public checkForm(): void {
    if (this.validAddress === true
      && this.validNumber === true
      && this.validPayment === true) {
        this.stateForm = '';
      } else {
        this.stateForm = 'disabled';
      }
  }
}
