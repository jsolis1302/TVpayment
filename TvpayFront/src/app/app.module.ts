import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payments/payment.component';
import { PaymentDetailComponent } from './payments/payment-detail/payment-detail.component';
import { PaymentItemComponent } from './payments/payment-list/payment-item/payment-item.component';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentComponent,
    PaymentDetailComponent,
    PaymentItemComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
