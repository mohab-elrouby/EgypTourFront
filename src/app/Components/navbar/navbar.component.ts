import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor( private router: Router) {}

  loggedUserObj = localStorage.getItem('loggedUser');
  loggedUserFname!:string;
  loggedIn!:boolean ;

  ngOnInit(): void {
    if(!this.loggedUserObj || this.loggedUserObj==null){
      this.loggedUserFname = JSON.parse(this.loggedUserObj!)['fname'];
      this.loggedIn = false;
      console.log(this.loggedUserFname);
  }
  else{
    this.loggedIn = true;
  }
}
handleSignOut() {
  this.router.navigate(['/']);
  this.loggedIn = false;
  localStorage.clear();
  

}

}
