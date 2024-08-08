import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Payment } from './payment.model';
//import { DatePipe } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class PaymentService {
  paymentsChanged = new Subject<Payment[]>();

  private payments: Payment[] = [];
  //constructor(private datePipe: DatePipe) { }

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
    //let latest_date = this.datePipe.transform(payment.payDate, 'yyyy-MM-ddT06 HH:mm:ss')

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
