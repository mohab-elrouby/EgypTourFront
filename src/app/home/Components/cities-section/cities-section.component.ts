
import { Component, } from '@angular/core';
@Component({
  selector: 'app-cities-section',
  templateUrl: './cities-section.component.html',
  styleUrls: ['./cities-section.component.css'],



})


export class CitiesSectionComponent {
  items = [
    {
      title: 'Item 1',
      description: '',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Item 2',
      description: '',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Item 3',
      description: '',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Item 4',
      description: '',
      image: '../../../../assets/images/aswan-card.jpg'
    },
    {
      title: 'Item 5',
      description: '',
      image: '../../../../assets/images/aswan-card.jpg'
    }
  ];
}