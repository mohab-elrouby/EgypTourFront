import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILocation } from 'src/app/trip/Models/ILocation';
import { CityName } from 'src/app/Search/Models/city-name';

@Component({
  selector: 'app-landing-serction',
  templateUrl: './landing-serction.component.html',
  styleUrls: ['./landing-serction.component.css']
})
export class LandingSerctionComponent implements OnInit, OnChanges {
  @Input() serviceName :string = "";
  @Input() ratingValue: number = 1;
  @Input() WorkingHoursEnd: string = "10:00 AM -12:00 PM";
  @Input() WorkingHoursStart: string = "10:00 AM -12:00 PM";
  @Input() Location: ILocation = {} as ILocation;
  @Input() img :string = "";

  cityNum: number = 0;
  City = CityName[this.cityNum];
  avgRating:number = 0;
  ratingarray: number[] = [];

  
  constructor() {
    // this.Rating();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.Rating();
    this.City = CityName[this.Location.cityName];
  }
  ngOnInit(): void {

  }


  // this method generates the rating for the service 
  Rating() {
    for (let i = 0; i < this.ratingValue; i++) {
      this.ratingarray.push(i);
    }
    return this.ratingarray;
  }

  

}
