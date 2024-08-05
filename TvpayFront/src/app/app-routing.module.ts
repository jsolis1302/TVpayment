import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { PaymentComponent } from './payments/payment.component';
import { PaymentDetailComponent } from './payments/payment-detail/payment-detail.component';
import { PaymentStartComponent } from './payments/payment-start/payment-start.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';

const routes: Routes = [

  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  {path:'payments', component:PaymentComponent,children:[
    { path: '', component: PaymentStartComponent },
    { path: ':id', component: PaymentDetailComponent },
    { path: ':id/edit', component: PaymentEditComponent },


  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
