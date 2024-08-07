import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Payment } from './payment.model';
import { DatePipe } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class PaymentService {
  paymentsChanged = new Subject<Payment[]>();

  private payments: Payment[] = [];
  constructor() { }

  setPayments(payments: Payment[]) {
    this.payments = payments;
    this.paymentsChanged.next(this.payments.slice());
  }

  getPayments(){
    console.log(this.payments);
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
   // let latest_date = this.datepipe.transform(payment.payDate, 'yyyy-MM-ddT06 HH:mm:ss')
   
    //payment.payDate = new Date(payment.payDate)
    console.log(payment.payDate);
    this.payments.push(payment);
    //console.log(this.payments)
    this.paymentsChanged.next(this.payments.slice());
    //console.log(this.paymentsChanged);
  }


  // getPayments():Observable<Payment[]>{ 
  //   //return this.payments.slice();
  //   return this.http.get<Payment[]>(this.APIUrl + '/allPayments')
  // }

  // getPayment(index: number) {
  //   return this.payments[index];
  // }
}
