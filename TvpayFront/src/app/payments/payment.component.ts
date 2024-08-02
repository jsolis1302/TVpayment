import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  selectedPayment!:Payment;

  constructor(){};

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
