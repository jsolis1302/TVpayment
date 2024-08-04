import { Injectable, EventEmitter } from '@angular/core';
import { Payment } from './payment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PaymentService {

  paymentSelected = new EventEmitter<Payment>();
  readonly APIUrl = "http://localhost:8080/payment"

  private payments: Payment[] = [
    new Payment(1,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1),
    new Payment(2,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 937, 1)
  ];

  constructor(private http:HttpClient) { }


  getPayments():Observable<Payment[]>{ 
    //return this.payments.slice();
    return this.http.get<Payment[]>(this.APIUrl + '/allPayments')
  }

  getPayment(index: number) {
    return this.payments[index];
  }
}
