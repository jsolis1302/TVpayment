import { Injectable, EventEmitter } from '@angular/core';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PaymentService {

  paymentSelected = new EventEmitter<Payment>();

  private payments: Payment[] = [
    new Payment(1,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1),
    new Payment(2,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 937, 1)
  ];

  constructor() { }


  getPayments() {
    return this.payments.slice();
  }

  getPayment(index: number) {
    return this.payments[index];
  }
}
