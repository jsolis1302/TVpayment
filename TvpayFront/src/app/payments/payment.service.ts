import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Payment } from './payment.model';
//import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class PaymentService {
  paymentsChanged = new Subject<Payment[]>();

  //paymentSelected = new EventEmitter<Payment>();
  //readonly APIUrl = "http://localhost:8080/payment"

  // private payments: Payment[] = [
  //   new Payment(1,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1),
  //   new Payment(2,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 937, 1)
  // ];

  private payments: Payment[] = [];
  constructor() { }

  setPayments(payments: Payment[]) {
    this.payments = payments;
    this.paymentsChanged.next(this.payments.slice());
  }

  getPayments(){
    return this.payments.slice();
  }

  getPayment(index: number){
    return this.payments[index];
  }

  updatePayment(index: number, newPayment: Payment) {
    this.payments[index] = newPayment;
    this.paymentsChanged.next(this.payments.slice());
  }

  addPayment(payment: Payment) {
    this.payments.push(payment);
    this.paymentsChanged.next(this.payments.slice());
  }


  // getPayments():Observable<Payment[]>{ 
  //   //return this.payments.slice();
  //   return this.http.get<Payment[]>(this.APIUrl + '/allPayments')
  // }

  // getPayment(index: number) {
  //   return this.payments[index];
  // }
}
