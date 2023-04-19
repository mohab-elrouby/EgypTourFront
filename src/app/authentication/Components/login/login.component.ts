import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../../Services/sign-up.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../../Models/login-request';
// import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup;
  wrongCredentials:boolean=false;
  loginRequest: LoginRequest = {} as LoginRequest;
  isLogged:boolean=true;
  loggedUserObj = localStorage.getItem('loggedUser');


  constructor(private fb: FormBuilder, private signUpService: SignUpService, private router: Router) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9_]{3,29}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

    if(this.loggedUserObj==null){
      this.isLogged=false;
    }

  }

  public CheckInvalidControls() {
    const controls = this.userForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log(name)
        return true;
      }
    }
    return false;
  }

  onSubmit() {
    if (this.CheckInvalidControls()) {
      console.log("not valid");
    }
    else {
      console.log("valid");

      this.loginRequest = {
        username: this.userForm.get('username')?.value,
        password: this.userForm.get('password')?.value
      }
      this.signUpService.loginUser(this.loginRequest).subscribe(
        response => {
          console.log(response);

          if (response.token == "") {
            this.wrongCredentials=true;
          }
          else {
            console.log('User registered successfully!');
            localStorage.setItem("jwt", response.token);
            localStorage.setItem("loggedUser", JSON.stringify(response.userDTO));
            localStorage.getItem("loggedUser")
            this.router.navigate(['/home']);
            location.href=`/home`
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }
}
