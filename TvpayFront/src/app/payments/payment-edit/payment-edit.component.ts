import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { formatDate } from '@angular/common';

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
    let payDate = new Date()
    let amount = 0;
    let imageId = null;
    let userId = 0;


  

    if (this.editMode) {
      const payment = this.paymentService.getPayment(this.id);
      //let formattedDt = formatDate(payment.payDate, 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US')
      payDate = payment.payDate;
      amount = payment.amount;
      imageId = payment.imageId;
      userId = payment.userId;
    }

    this.paymentForm = new FormGroup({
      payDate: new FormControl(payDate, Validators.required),
      
      amount: new FormControl(amount, Validators.required),
      imageId: new FormControl(imageId),
      userId: new FormControl(userId, Validators.required),


    });
  }







}
