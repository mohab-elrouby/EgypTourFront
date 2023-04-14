import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../../Services/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm:FormGroup;

  constructor(private fb:FormBuilder, private signUpService: SignUpService, private router: Router)
  {
    this.userForm = this.fb.group ({
    username : ['',[Validators.required ,Validators.email] ],
    password : ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword : ['', [Validators.required, Validators.minLength(8)]],
  })
  }


  get username(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

}
