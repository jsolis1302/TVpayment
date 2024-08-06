import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payments/payment.component';
import { PaymentDetailComponent } from './payments/payment-detail/payment-detail.component';
import { PaymentItemComponent } from './payments/payment-list/payment-item/payment-item.component';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { PaymentStartComponent } from './payments/payment-start/payment-start.component';
import { HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';
import { PaymentService } from './payments/payment.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentComponent,
    PaymentDetailComponent,
    PaymentItemComponent,
    PaymentListComponent,
    DropDownDirective,
    PaymentStartComponent,
    PaymentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
   provideClientHydration(),
   provideHttpClient(withFetch()),
    PaymentService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function providerHttpClient(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

