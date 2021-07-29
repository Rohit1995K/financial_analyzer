import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value): void {
    if (this.loginForm.valid){
      alert('Logged in Successfully');
      localStorage.setItem('token', 'dummy_token');
      this.loginForm.value.uname === 'rohit1995$' ? localStorage.setItem('userType', 'user') : localStorage.setItem('userType', 'admin');
      this.loginForm.reset();
      this.router.navigate(['dashboard']);
    }
  }
}
