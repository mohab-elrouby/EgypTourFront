import { Component } from '@angular/core';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent {
content = [
  {
    id:"1.",
  header:"Search for the service you want" ,
  content:"Check all the services in the city you choose and check reviews for each one or add your own review .",
  img:"../../../../assets//images/search.svg" 
}, 
{
  id:"2.",
  header:"Real-time chat with real people",
  content:"Communicate directly with our customer service from every city to help you with anything you need .",
  img:"../../../../assets//images/chat.svg"
},
{
  id:"3.",
  header:"Manage your own Dashboard",
  content:"Create a trip , activities and get recommendations for the services close to you. Add friends to your Dashboard and make your own to-do list",
  img:"../../../../assets//images/dashboard.png"
},
{
  id:"4.",
  header:"Keep in touch with your friends",
  content:"Add friends to your timeline and share your experiences with them through our social platform .",
  img:"../../../../assets//images/Social-media.png"
}
]
}
