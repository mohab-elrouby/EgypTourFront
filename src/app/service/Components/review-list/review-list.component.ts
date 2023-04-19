import { Component, Input } from '@angular/core';
import { IserviceReview } from '../../Models/iservice-review';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { IResponse } from '../../Models/iresponse';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {
  serviceId : number = 1;
  currIndex : number = 0;
  itemsPerPage : number = 3;
  reviews: IserviceReview[] = [];
  count:number = 0;
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.getReviews(this.serviceId);
  } 

  getReviews(id:number){
    this.service.getServiceReviews(id, this.currIndex, this.itemsPerPage).subscribe({
      next: (reviews:IResponse) => {
        this.reviews = reviews.data;
        this.count = reviews.statusCode;
        console.log(this.reviews);
      },
      error: (err:any) => {
        console.log(err);
      }
    });    
  }

  onPageChange(event : PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.count){
      endIndex = this.count
    }
    this.currIndex = startIndex;
    this.itemsPerPage = event.pageSize;
    this.getReviews(this.serviceId);
    console.log(startIndex)
  }
}
