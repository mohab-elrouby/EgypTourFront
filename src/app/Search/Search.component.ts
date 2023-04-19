import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { SearchServiceService } from './Services/SearchService.service';
import { ISearchService } from './Models/ISearchService';
import { IResponse } from './Models/IResponse';
import { CityName } from './Models/city-name';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { IImage } from './Models/IImage';
import { ILocation } from "src/app/trip/Models/ILocation";

@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})
export class SearchComponent implements OnInit {


  showSpinner:boolean=false;


  numberOfResults:number = 650;
  numberOfPages :number = Math.round(this.numberOfResults/8);
  currentPage:number =1;
  skip:number=0;
  take:number=8;
  firstPage:number =this.currentPage;
  secondPage:number=this.currentPage+1;
  thirdPage:number=this.currentPage+2;

  @Input()city:number=0;
  @Input()searchString:string='';

  serviceList:IResponse={
    count:0 ,
    services:[{
      id:0 ,
      name:'',
      description:'',
      images: [{url:''}] as IImage[],
      avgRating:0,
      profileImage:'',
      firstReview:'',
      workingHoursEnd: new Date(),
      workingHoursStart: new Date(),
      location:{  city:0,
        country:0,
        cityName:0} as ILocation,
} ] as ISearchService[]
  }as IResponse;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  constructor(private router:Router, private route:ActivatedRoute ,private searchService:SearchServiceService ,private _snackBar: MatSnackBar) {

   }

  cities : CityName[] =[CityName.Cairo,CityName.Alexandria,CityName.Aswan,CityName.Giza,CityName.Luxor,CityName.RedSea]
  citieNames : string[] =['Cairo','Alexandria','Aswan','Giza','Luxor','RedSea']


  GetAllServices():void{
    this.showSpinner=true;
    this.searchService.getAllServices(this.city,this.skip,this.take).subscribe(services =>{
      this.serviceList = services;
      this.showSpinner=false;
      this.numberOfPages = services.count;
  });
  }

  ngOnInit():void {

    this.route.queryParams.subscribe(
      params=>{
        if(params['q']!=undefined&&params['city']!=undefined){
          this.searchString=params['q'];
          this.city=Number(params['city']);
          this.search();
        }
        else{
           this.GetAllServices();
        }
      }
    )

  }



  pickcity(cityIndex: number){
    this.city=cityIndex;
  }

  RefreshService(event:PageEvent){
    this.showSpinner=true
    this.skip=event.pageIndex*8
    if(this.searchString==''){
      this.searchService.getAllServices(this.city,this.skip,this.take).subscribe(services=>{
        this.serviceList.services=services.services;
        this.numberOfPages=services.count;
        this.showSpinner=false;
      });
    }
    else{
      this.search();
    }

  }

  search(){
    if(this.searchString==''){
      this.GetAllServices();
    }
    else{
      this.showSpinner=true;
      console.log(this.searchString);
      this.searchService.search(this.city,this.skip,this.take,this.searchString,0,).subscribe(i=>{
        this.serviceList.services= i.services;
        console.log(this.serviceList);
        this.numberOfPages=i.count;
        this.showSpinner=false;
      })
    }
  }
}

