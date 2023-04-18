import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Itrip } from '../../Models/Itrip';
import { TripService } from '../../Services/trip.service';

@Component({
  selector: 'app-DialogAnimationsExampleDialog',
  templateUrl: './DialogAnimationsExampleDialog.component.html',
  styleUrls: ['./DialogAnimationsExampleDialog.component.css']
})
export class DialogAnimationsExampleDialogComponent implements OnInit {

  images:string[]=[
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Caspar_David_Friedrich_-_Tageszeitenzyklus%2C_Der_Morgen_%281821-22%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/1920px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/1280px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1920px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f3/Raden_Saleh_-_hunt.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/1920px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg'
  ]
  trip:Itrip;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: Itrip,private tripService:TripService) {
    this.trip=data;
  }

  ngOnInit() {
  }

  UpdateBackGroundImage(index: number){
    this.trip.backgroundImage=this.images[index];
    this.tripService.updatetrip(this.trip.id,this.trip).subscribe(arg => {
      console.log(arg);
    })

  }

}
