import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpService } from '../../Services/sign-up.service';
import { Router } from '@angular/router';
import { IUser } from '../../Models/iuser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userForm:FormGroup;

  constructor(private fb:FormBuilder, private signUpService: SignUpService, private router: Router)
  {
    this.userForm = this.fb.group ({
    Fname : ['', [Validators.required, Validators.minLength(3)]],
    Lname : ['', [Validators.required, Validators.minLength(3)]],
    username : ['', [Validators.required, Validators.minLength(3)]],
    email : ['',[Validators.required ,Validators.email] ],
    password : ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword : ['', [Validators.required, Validators.minLength(8)]],
    city : ['',[Validators.maxLength(30)] ],
    phone : ['',[Validators.maxLength(11)] ],
  })
  }

  onSubmit() {
    const userDTO = {
      Fname: this.userForm.get('Fname')?.value,
      Lname: "mohab",
      email: "mohab@f.com",
      UsernameName: "mohab99",
      password: "mohabbbsada",

      ProfilePictureUrl: "",
      City: "",
      Phone: ""
    };
    console.log(userDTO);
    this.signUpService.registerUser(userDTO).subscribe(
      response => {
        console.log('User registered successfully!');
        // redirect to login page
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }

  get Fname(){
    return this.userForm.get('Fname');
  }

  get Lname(){
    return this.userForm.get('Lname');
  }

  get username(){
    return this.userForm.get('username');
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

  get city(){
    return this.userForm.get('city');
  }

  get phone(){
    return this.userForm.get('phone');
  }

}
