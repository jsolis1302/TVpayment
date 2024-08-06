import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Payment } from './payment.model';
import { DataStorageService } from '../shared/data-storage.service';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})

@Injectable({ providedIn: 'root' })
export class PaymentsResolverService implements Resolve<Payment[]>{

  constructor(
    private dataStorageService: DataStorageService,
    private paymentService: PaymentService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.paymentService.getPayments();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchpayments();
    } else {
      return recipes;
    }
  }
}
