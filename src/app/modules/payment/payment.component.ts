import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public paymentForm = new FormGroup({
    cust_id: new FormControl('', [Validators.required, Validators.minLength(9)]),
    amount: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    pay_type: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmitPayment(value): void {
    console.log(value);
    this.paymentForm.reset();
  }

}
