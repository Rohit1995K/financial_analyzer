import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { RegistrationComponent } from './modules/registration/registration.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegistrationComponent
  },
  {
    path : '',
    component : DefaultComponent,
    children : [
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'payment',
        component : PaymentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
