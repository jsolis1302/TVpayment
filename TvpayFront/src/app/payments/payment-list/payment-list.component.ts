import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Payment } from '../payment.model';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent implements OnInit {

  @Output() paymentWasSelected = new EventEmitter<Payment>();
  payments: Payment[] = [
    new Payment(1,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1),
    new Payment(2,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1)
  ];

  constructor(){}
  ngOnInit(){}

  onPaymentSelected(payment:Payment){
    this.paymentWasSelected.emit(payment);

  }

}
