import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { SearchServiceService } from './Services/SearchService.service';
import { ISearchService } from './Models/ISearchService';
import { IResponse } from './Models/IResponse';

@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})
export class SearchComponent implements OnInit {

  numberOfResults:number = 650;
  numberOfPages :number = Math.round(this.numberOfResults/8);
  currentPage:number =1;
  skip:number=0;
  take:number=8;
  firstPage:number =this.currentPage;
  secondPage:number=this.currentPage+1;
  thirdPage:number=this.currentPage+2;

  serviceList!:IResponse;
  @Input()searchString:string='';
  @Input()city!:Number;
  constructor(private router:Router, private route:ActivatedRoute ,private searchService:SearchServiceService) {
    route.params.subscribe(val => {
     this.pageChange();
    });
   }




  cities : string[] =[ 'cairo'  ,'fayoum',
  'Aswan',
  'Luxor',]


  ngOnInit():void {
    this.searchService.getAllServices(0,this.skip,this.take).subscribe(services =>{
      this.serviceList = services;
      this.numberOfPages = Math.round(600/8);

    const page= Number(this.route.snapshot.paramMap.get('page'));
    if(page<=this.numberOfPages){
      this.currentPage =page;
      this.skip=page*8-8;
    }
  });
  }

  pageChange():void{
    const page= Number(this.route.snapshot.paramMap.get('page'));
    if(page<=this.numberOfPages){
      this.currentPage =page;
      this.skip=page*8-8;
    }
    if(this.currentPage<=this.numberOfPages&&this.currentPage>=this.numberOfPages-2){
      this.firstPage=this.numberOfPages-2;
      this.secondPage=this.numberOfPages-1;
      this.thirdPage=this.numberOfPages;
    }
    else{
      this.firstPage=this.currentPage;
      this.secondPage=this.currentPage+1;
      this.thirdPage=this.currentPage+2;
    }
  }
}
