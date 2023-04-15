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
      description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Aswan2',
      description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Aswan3',
      description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Aswan4',
      description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Aswan5',
      description: 'Aswan is a city',
      image: '../../../../assets/images/aswan-card.jpg'
    }
  ];
}
