import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { IserviceReview } from '../../Models/iservice-review';
import { IResponse } from '../../Models/iresponse';
import { ISearchService } from 'src/app/Search/Models/ISearchService';

@Component({
  selector: 'app-servic',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceDto : ISearchService = {} as ISearchService;
  @Input() serviceId : number = 1;

  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {
    this.service.getService(this.serviceId).subscribe( 
      result => {
        console.log(result.name)
        console.log(result.avgRating)
        console.log(result)
        this.serviceDto = result;
    }
    );
  } 
}
