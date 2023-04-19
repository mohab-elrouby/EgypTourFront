import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  loggedUserObj = localStorage.getItem('loggedUser');
  loggedUserFname!:string;
  loggedIn!:boolean ;
  getUserInfo():void{
    if(!this.loggedUserObj || this.loggedUserObj==null){
      this.loggedUserFname = JSON.parse(this.loggedUserObj!).fname;
    }
  }
  ngOnInit(): void {
    if(!this.loggedUserObj || this.loggedUserObj==null){
      this.loggedIn = false;
      
  }
  else{
    this.loggedIn = true;
  }
  console.log(this.loggedIn);
}
}
