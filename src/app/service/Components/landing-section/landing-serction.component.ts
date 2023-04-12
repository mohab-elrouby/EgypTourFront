import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-serction',
  templateUrl: './landing-serction.component.html',
  styleUrls: ['./landing-serction.component.css']
})
export class LandingSerctionComponent {
ratingValue = 5;
ratingarray:number[] = [];
WorkingHours:string = "10:00 AM -12:00 PM"; 
Location:string = "Fayoum , Nasr st"
constructor() {
  this.Rating();
}
// this method generates the rating for the service 
 Rating(){
  for(let i = 0; i < this.ratingValue; i++) {
    this.ratingarray.push(i);
  }
  return this.ratingarray;
}

}
