import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrl: './payment-edit.component.css'
})
export class PaymentEditComponent implements OnInit {

  id!: number;
  editMode = false;
  paymentForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.paymentService.updatePayment(this.id, this.paymentForm.value);
    } else {
      this.paymentService.addPayment(this.paymentForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let paymentDate = new Date();
    let amount = 0;
    let url = '';
    let userId = 0;
  

    if (this.editMode) {
      const payment = this.paymentService.getPayment(this.id);
      paymentDate = payment.payDate;
      amount = payment.amount;
      url = payment.url;
      userId = payment.userId;
    }

    this.paymentForm = new FormGroup({
      paymentDate: new FormControl(paymentDate, Validators.required),
      amount: new FormControl(amount, Validators.required),
      url: new FormControl(url, Validators.required),
      userId: new FormControl(userId, Validators.required),


    });
  }







}
