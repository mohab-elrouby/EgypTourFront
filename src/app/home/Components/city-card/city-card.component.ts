import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent {
  constructor( private router: Router){
  }

  search(city:number){
    this.router.navigate(['/search'],{queryParams:{q:'',city:`${city}`}});

  }
  items = [
    {
      title: 'Cairo',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/Eygpt.jpg'
    },
    {
      title: 'Alexandria',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/alex.jpg'
    },
    {
      title: 'Aswan',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Giza',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/Giza2.jpg'
    },
    {
      title: 'Luxor',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/luxor.jpg'
    },
    {
      title: 'Red Sea',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/bahrahmer.jpg'
    }
  ];
}
