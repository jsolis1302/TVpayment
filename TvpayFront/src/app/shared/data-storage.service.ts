import { Injectable } from '@angular/core';
import { PaymentService } from '../payments/payment.service';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Payment } from '../payments/payment.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private paymentService: PaymentService) { }


  storePayments(){
    const payments = this.paymentService.getPayments();
    console.log(payments);
    this.http
    .put(
      'http://localhost:8080/payment/updateAll',
      payments
    )
    .subscribe(response => {
      console.log(response);
    });


  };

  fetchpayments(){
    return this.http
    .get<Payment[]>(
      "http://localhost:8080/payment/allPayments"
    )
    .pipe(
      map(payments =>{
        return payments.map(payment => {
          return{
            ...payment
          };
        });
      }),
      tap(payments => {
        this.paymentService.setPayments(payments);
      })
    )
  }

}
