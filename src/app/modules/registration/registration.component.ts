import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registerForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    uname: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),
    cpwd: new FormControl('', [Validators.required])
  });

  // constructor(private fb: FormBuilder) { }
  constructor() { }

  ngOnInit(): void {}

  onSubmitUserDetails(value): void {
    console.log(value);
  }
}
