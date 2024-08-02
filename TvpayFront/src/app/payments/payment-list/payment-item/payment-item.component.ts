import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Payment } from '../../payment.model';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrl: './payment-item.component.css'
})
export class PaymentItemComponent implements OnInit {

  @Input() payment!:Payment;
  @Output() paymentSelected = new EventEmitter<void>();

  ngOnInit(): void {
      
  }

  onSelected(){
    this.paymentSelected.emit();
  }

}
