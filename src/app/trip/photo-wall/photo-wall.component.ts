import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.css']
})
export class PhotoWallComponent {
  @Input()photos: string[] | undefined;

  myPhotos: string[] = [
    'https://via.placeholder.com/300x200', // example URL for an image with size 300x200
    'https://via.placeholder.com/200x300', // example URL for an image with size 200x300
    'https://via.placeholder.com/400x400', // example URL for an image with size 400x400
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600

    // Add more dummy image URLs with different sizes here
  ]
}
