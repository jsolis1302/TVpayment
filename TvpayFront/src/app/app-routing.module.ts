import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import path from 'path';
import { PaymentComponent } from './payments/payment.component';
import { PaymentDetailComponent } from './payments/payment-detail/payment-detail.component';
import { PaymentStartComponent } from './payments/payment-start/payment-start.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';
import { PaymentsResolverService } from './payments/payments-resolver.service';

const routes: Routes = [

  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  {path:'payments', component:PaymentComponent,children:[
    { path: '', component: PaymentStartComponent },
    { path: 'new', component: PaymentEditComponent },
    { path: ':id', component: PaymentDetailComponent,resolve:[PaymentsResolverService] },
    { path: ':id/edit', component: PaymentEditComponent,
      resolve:[PaymentsResolverService]
     },


  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
