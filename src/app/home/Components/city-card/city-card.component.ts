import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent {
  items = [
    {
      title: 'Aswan',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
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
    },
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
      title: 'Giza',
      // description: 'Aswan is a city',
      image: '../../../../assets/images/Giza2.jpg'
    }
  ];
}
