import { AfterViewInit, Component, ElementRef, OnInit, ViewChild ,NgZone} from '@angular/core';
import { Itrip } from '../Models/Itrip';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from './DialogAnimationsExampleDialog/DialogAnimationsExampleDialog.component';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { TripService } from '../Services/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements AfterViewInit ,OnInit {

  constructor(public dialog: MatDialog,private _ngZone: NgZone ,private tripService: TripService) {}

  trip!:Itrip;

  dragDisabled:boolean = true;
  @ViewChild('image') image!: ElementRef;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  dragPosition = {x: 0, y: 0};

  DisableSave:boolean = true;


  tripId:number = 5;
  // trip:Itrip={backgroundImage:"https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg"}
  myPhotos: string[] = [
    'https://via.placeholder.com/300x200', // example URL for an image with size 300x200
    'https://via.placeholder.com/200x300', // example URL for an image with size 200x300
    'https://via.placeholder.com/400x400', // example URL for an image with size 400x400
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600

    // Add more dummy image URLs with different sizes here
  ]

  ngOnInit(): void {
    this.tripService.GetById(5).subscribe(trip =>{
      this.trip=trip;
      console.log(this.trip);
   });
  }

  ngAfterViewInit() {
    // this.image.nativeElement.src="https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg";

    console.log(this.image.nativeElement.offsetTop)
  }

  SavePosition(){
        console.log(this.dragPosition);
        this.DisableSave = true;
        this.dragDisabled=true;
  }
  ChangePosition(){
    this.dragDisabled=false;
    this.DisableSave = false;
  }
  dragEnd($event: CdkDragEnd) {
    this.dragPosition=
   $event.source.getFreeDragPosition();
}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(DialogAnimationsExampleDialogComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}

}
