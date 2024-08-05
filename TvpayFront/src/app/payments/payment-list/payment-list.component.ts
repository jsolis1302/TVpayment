import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Payment } from '../payment.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent implements OnInit, OnDestroy {

  payments!: Payment[];
  subscription!: Subscription;

  // @Output() paymentWasSelected = new EventEmitter<Payment>();
  // payments: Payment[] = [
  //   new Payment(1,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1),
  //   new Payment(2,new Date(), "https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg", 935, 1)
  // ];

  

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){

    this.subscription = this.paymentService.paymentsChanged
    .subscribe(
      (payments: Payment[])=>{
        this.payments = payments
      });

      this.payments = this.paymentService.getPayments();

      console.log(this.payments)
    

    //this.payments = this.paymentService.getPayments();
    //this.payments = this.paymentService.getPayments().subscribe();
    // this.paymentService.getPayments().subscribe((res: Payment[])=>{
    //   this.payments = res
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onPaymentSelected(payment:Payment){
  //   this.paymentWasSelected.emit(payment);

  // }

}
