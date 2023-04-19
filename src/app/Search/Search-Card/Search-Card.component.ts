import { Component, OnInit,OnChanges,SimpleChanges, Input } from '@angular/core';
import { ISearchService } from '../Models/ISearchService';
@Component({
  selector: 'app-Search-Card',
  templateUrl: './Search-Card.component.html',
  styleUrls: ['./Search-Card.component.css']
})
export class SearchCardComponent implements OnInit {


  baseUrl:string="http://localhost:5275"

  rating:number=2.5;
  cropWidth: number = this.rating*475/5;
  mousein :Boolean =false;
  mouseout :Boolean =false;

  @Input()
  carousalId! : string ;

  isOpen:boolean=false;

  hashcarousalId : string = `#${this.carousalId}`

  now:number=new Date().getHours();
  startinghours!:number;
  endhours!:number;

  @Input()searchService!:ISearchService;


  ngOnChanges(changes: SimpleChanges): void {
<<<<<<< HEAD
    this.cropWidth = this.rating*418/5;
=======
    this.startinghours=new Date(this.searchService.workingHoursStart).getHours();
    this.endhours=new Date(this.searchService.workingHoursEnd).getHours();
    this.rating=this.searchService.avgRating;
    console.log(new Date().getHours());

    console.log(new Date(this.searchService.workingHoursStart).getHours());

    if((this.now>this.startinghours&&this.now<this.endhours)){
           this.isOpen=true
    }
    this.cropWidth = this.rating*188/5;
>>>>>>> 73b15584925bf3bcb3105d81ac9de28abdf4c259
  }

  constructor() {}

  MouseIn(){
    this.mousein  =true;
    this.mouseout =false;
  }
  MouseOut(){
    this.mousein  =false;
    this.mouseout =true;
  }

  ngOnInit() {
    this.hashcarousalId = `#${this.carousalId}`
  }

}
