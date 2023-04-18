import { AfterViewInit, Component, ElementRef, OnInit, ViewChild ,NgZone} from '@angular/core';
import { Itrip } from '../Models/Itrip';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from './DialogAnimationsExampleDialog/DialogAnimationsExampleDialog.component';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { TripService } from '../Services/trip.service';
import { ILocation } from '../Models/ILocation';
import { IOwner } from '../Models/IOwner';
import { INote } from '../Models/INote';
import { IActivity } from '../Models/IActivity';
import { IToDoList } from '../Models/IToDoList';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements AfterViewInit ,OnInit {


  BackGroundImages:string[]=[];

  constructor(public dialog: MatDialog,private _ngZone: NgZone ,private tripService: TripService) {}

  trip= {id: 1 ,
  name:'',
  start: new Date(),
  end: new Date(),
  location:{city :0, country :1} as ILocation,
  owner:{fname:'',lname:'',profilePicUrl:'',id:1} as IOwner,
  description:'',
  viewers:[{fname:'',lname:'',profilePicUrl:'',id:1}] as IOwner[],
  backgroundImage:'',
  ypostion:0,
  activities:[{id:1,
    name:'',
    description:'',
    start:new Date(),
    end:new Date(),
    location:{city :0, country :0} as ILocation,
    notes:[{content: ''}] as INote[]
}] as IActivity[],
toDOLists:[{id:1,name:''}] as IToDoList[]
} as Itrip
;

  showSpinner:boolean=true;

  dragDisabled:boolean = true;
  @ViewChild('image') image!: ElementRef;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  dragPosition = {x: 0, y: 0};

  DisableSave:boolean = true;


  tripId:number = 1;
  // trip:Itrip={backgroundImage:"https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg"}
  myPhotos: string[] = [
    'https://via.placeholder.com/300x200', // example URL for an image with size 300x200
    'https://via.placeholder.com/200x300', // example URL for an image with size 200x300
    'https://via.placeholder.com/400x400', // example URL for an image with size 400x400
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600
    // 'https://via.placeholder.com/800x600', // example URL for an image with size 800x600

    // Add more dummy image URLs with different sizes here
  ]

  ngOnInit(): void {
      this.tripService.GetById(5).subscribe(trip =>{
        this.trip=trip;
        this.showSpinner=false;
        console.log(this.trip);
        if(!(this.trip.ypostion === undefined)){
          this.dragPosition.y=trip.ypostion;
        }
     });
  }

  ngAfterViewInit() {

  }

  SavePosition(){
        this.UpdateTrip();
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
   this.trip.ypostion=this.dragPosition.y;
}

openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(DialogAnimationsExampleDialogComponent, {
    width: '50%',
    height:'80%',
    enterAnimationDuration,
    exitAnimationDuration,
    data:this.trip
  });
}

setTripId(id:number){
  this.tripId = id;
  console.log(this.tripId);
  this.tripService.GetById(this.tripId).subscribe(trip =>{
    this.trip=trip;
    this.showSpinner=false;
    console.log(this.trip);
 });
}

setId(id: number) {
  this.tripId = id;
  console.log(id);
  this.tripService.GetById(id).subscribe(trip =>{
    this.trip=trip;
    this.showSpinner=false;
    console.log(this.trip);
 });
}

UpdateTrip(){
  console.log(this.trip);
  this.tripService.updatetrip(this.tripId,this.trip).subscribe(arg=>{
    console.log(arg);
  })
}
}
