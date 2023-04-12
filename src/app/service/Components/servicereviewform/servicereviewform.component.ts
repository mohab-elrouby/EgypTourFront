import { Component } from '@angular/core';

@Component({
  selector: 'app-servicereviewform',
  templateUrl: './servicereviewform.component.html',
  styleUrls: ['./servicereviewform.component.css']
})
export class ServicereviewformComponent {
  name = 'Angular 6';


stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: any;
constructor() { }
ngOnInit() {
}
countStar(star: any) {
  this.selectedValue = star;
      console.log('Value of star', star);
}
}