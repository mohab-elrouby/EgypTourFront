import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { SearchServiceService } from './Services/SearchService.service';
import { ISearchService } from './Models/ISearchService';
import { IResponse } from './Models/IResponse';
import { CityName } from './Models/city-name';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

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

  serviceList!:IResponse;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  constructor(private router:Router, private route:ActivatedRoute ,private searchService:SearchServiceService ,private _snackBar: MatSnackBar) {

    route.params.subscribe(val => {
    });
   }

  cities : CityName[] =[CityName.Cairo,CityName.Alexandria,CityName.Aswan,CityName.Giza,CityName.Luxor,CityName.RedSea]
  citieNames : string[] =['Cairo','Alexandria','Aswan','Giza','Luxor','RedSea']


  GetAllServices():void{
    this.showSpinner=true;
    this.searchService.getAllServices(this.city,this.skip,this.take).subscribe(services =>{
      this.serviceList = services;
      console.log(services);
      console.log(this.serviceList);
      this.showSpinner=false;
      this.numberOfPages = services.count;

    const page= Number(this.route.snapshot.paramMap.get('page'));
    if(page<=this.numberOfPages){
      this.currentPage =page;
      this.skip=page*8-8;
    }
  });
  }




  ngOnInit():void {
    if(this.searchString==''){
      this.GetAllServices();
    }
    else{

    }
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
        console.log(i.services);
        this.numberOfPages=i.count;
        this.showSpinner=false;
      })
    }
  }

  openServiceDetails(id:number){
    this.router.navigate([`/service/${id}`])
  }
}

