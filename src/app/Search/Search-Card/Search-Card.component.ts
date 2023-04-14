import { Component, OnInit,OnChanges,SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-Search-Card',
  templateUrl: './Search-Card.component.html',
  styleUrls: ['./Search-Card.component.css']
})
export class SearchCardComponent implements OnInit {



  rating:number=2.5;
  cropWidth: number = this.rating*175/5;
  mousein :Boolean =false;
  mouseout :Boolean =false;

  @Input()
  carousalId! : string ;

  hashcarousalId : string = `#${this.carousalId}`


  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating*188/5;
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
