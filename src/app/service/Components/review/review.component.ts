import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PaginationService } from '../../Services/pagination/pagination.service'
import { IserviceReview } from '../../Models/iservice-review';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() serviceReview:IserviceReview = {} as IserviceReview;
  // serviceId:string ="1";
  // reviews: IserviceReview[]=[];
  // pageSize = 4;
  // pageIndex = 0;
  userFname : string ="";
  userLname : string ="";
  userImgUrl: string ="";
  reviewContent: string ="";
  reviewDate : Date = new Date();
  reviewRate : number = 5;
  
  constructor(private pagination:PaginationService){}
  ngOnInit(): void {
    console.log(this.serviceReview)
    this.userFname = this.serviceReview.reviewer.fname;
    this.userLname = this.serviceReview.reviewer.lname;
    this.userImgUrl = this.serviceReview.reviewer.profilePicUrl;
    this.reviewContent = this.serviceReview.content;
    this.reviewDate = this.serviceReview.date;
    this.reviewRate = this.serviceReview.rating;
  }

  // ngOnInit():void{
  //   this.pagination.getReviews(this.serviceId)
  //   .subscribe({
  //     next:(review)=>{
  //       this.reviews =review;
  //     },
  //     error : (response)=> {console.log(response)}
  //   })
  // }
}
