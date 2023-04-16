import { Component, OnInit } from '@angular/core';
import { Itrip } from '../Models/Itrip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip:Itrip={backgroundImage:"https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg"}

  ngOnInit() {
  }

}
