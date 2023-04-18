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


  tripId:number = 5;

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

UpdateTrip(){
  console.log(this.trip);
  this.tripService.updatetrip(this.tripId,this.trip).subscribe(arg=>{
    console.log(arg);
  })
}
}
