import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent {
  @Input() description:string = "";
}
