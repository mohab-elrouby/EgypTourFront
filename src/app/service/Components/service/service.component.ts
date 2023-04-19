import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IserviceReview } from '../../Models/iservice-review';
import { IResponse } from '../../Models/iresponse';
import { ISearchService } from 'src/app/Search/Models/ISearchService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servic',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceDto : ISearchService = {} as ISearchService;
  serviceId : number = 1;
  sub!:Subscription;

  constructor(private service:ServiceService, private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
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
