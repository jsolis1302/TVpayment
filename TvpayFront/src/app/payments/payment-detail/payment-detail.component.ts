import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Payment } from '../payment.model';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrl: './payment-detail.component.css'
})
export class PaymentDetailComponent implements OnInit {

  payment!: Payment;
  id!: number;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) {
}


ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.payment = this.paymentService.getPayment(this.id);
      }
    );
}

  //@Input() payment!: Payment

}
