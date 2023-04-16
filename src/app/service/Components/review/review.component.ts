import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationService } from '../../Services/pagination/pagination.service'
import { IserviceReview } from '../../Models/iservice-review';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent  {
  // serviceId:string ="1";
  // reviews: IserviceReview[]=[];
  // pageSize = 4;
  // pageIndex = 0;

  constructor(private pagination:PaginationService){}

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
