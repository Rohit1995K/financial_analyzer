import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value): void {
    console.log(value);
  }
}
