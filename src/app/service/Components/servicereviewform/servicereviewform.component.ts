import { Component, Input } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { IserviceReview } from '../../Models/iservice-review';
import { IReviewer } from '../../Models/ireviewer';

@Component({
  selector: 'app-servicereviewform',
  templateUrl: './servicereviewform.component.html',
  styleUrls: ['./servicereviewform.component.css']
})
export class ServicereviewformComponent {
  name = 'Angular 6';
  loggedUserObj = localStorage.getItem('loggedUser');
  loggedUserId = JSON.parse(this.loggedUserObj!).id;
  loggedUserFname = JSON.parse(this.loggedUserObj!).fname;
  loggedUserLname = JSON.parse(this.loggedUserObj!).lname;
  
  @Input() serviceId:number = 1;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: any;
  reviewContent: string = "";


  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  countStar(star: any):number {
    this.selectedValue = star;
    console.log('Value of star', star);   
    return star;
  }

  submitReview(){
    if(this.selectedValue > 0){
      let review = {content: this.reviewContent , rating: this.selectedValue, date : new Date(),
       reviewer: {id:this.loggedUserId, fname:this.loggedUserFname, lname:this.loggedUserLname} as IReviewer} as IserviceReview
       console.log("inside if" + review);   
       this.service.writeServiceReview(this.serviceId, this.loggedUserId, review).subscribe(
       );
      }
      this.router.navigate(['/service']);
    }
}