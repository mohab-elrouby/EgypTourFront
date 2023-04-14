import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';



const routes:Routes=[
  {path : 'login', component: LoginComponent},
  {path : 'signup', component: SignUpComponent}
]


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
    ],
  exports:[
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthenticationModule { }
