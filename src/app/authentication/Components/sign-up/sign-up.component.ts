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
  userDto: IUser = {} as IUser;
  isPasswordConfirmed: boolean = false;

  constructor(private fb:FormBuilder, private signUpService: SignUpService, private router: Router)
  {
    this.userForm = this.fb.group ({
    Fname : ['', [Validators.required, Validators.minLength(4),Validators.pattern("^[A-Za-z]{3,29}$")]],
    Lname : ['', [Validators.required, Validators.minLength(4),Validators.pattern("^[A-Za-z]{3,29}$")]],
    username : ['', [Validators.required, Validators.minLength(4),Validators.pattern("^[A-Za-z][A-Za-z0-9_]{3,29}$")]],
    email : ['',[Validators.required ,Validators.email] ],
    password : ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword : ['', [Validators.required, Validators.minLength(8)]]
  })
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

  public CheckPasswordConfirmed(){

    return this.password?.value == this.confirmpassword?.value;

  }

  onSubmit() {
    console.log(this.password?.value);
    console.log(this.confirmpassword?.value);
    if (this.CheckInvalidControls() || !this.CheckPasswordConfirmed()){
      
      console.log("not valid");
    }
    else{
      console.log("valid");
      this.userDto
      = {
       FName: this.userForm.get('Fname')?.value,
       LName: this.userForm.get('Lname')?.value,
       Email: this.userForm.get('email')?.value,
       UsernameName: this.userForm.get('username')?.value,
       Password: this.userForm.get('password')?.value,
 
       ProfilePictureUrl: "",
       City: "",
       Phone: ""
     };
     console.log(this.userDto);
     this.signUpService.registerUser(this.userDto).subscribe(
       response => {
         console.log('User registered successfully!');
         // redirect to login page
         this.router.navigate(['user/login']);
       },
       error => {
         console.error(error);
       }
     );
    }

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

  get confirmpassword(){
    return this.userForm.get('confirmpassword');
  }

}
