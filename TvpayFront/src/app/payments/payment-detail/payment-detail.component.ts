import { Component, Input } from '@angular/core';
import { Payment } from '../payment.model';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrl: './payment-detail.component.css'
})
export class PaymentDetailComponent {
  @Input() payment!: Payment

}
