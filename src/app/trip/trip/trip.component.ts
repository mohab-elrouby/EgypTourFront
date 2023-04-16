import { AfterViewInit, Component, ElementRef, OnInit, ViewChild ,NgZone} from '@angular/core';
import { Itrip } from '../Models/Itrip';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from './DialogAnimationsExampleDialog/DialogAnimationsExampleDialog.component';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { TripService } from '../Services/trip.service';
import { ILocation } from '../Models/ILocation';
import { IOwner } from '../Models/IOwner';
import { INote } from '../Models/INote';
import { IActivity } from '../Models/IActivity';
import { Iactivity } from 'src/app/activity/Models/Iactivity';
import { IToDoList } from '../Models/IToDoList';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements AfterViewInit ,OnInit {

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
  activities:[{id:1,
    name:'',
    description:'',
    start:Date.now(),
    end:Date.now(),
    location:{city :0, country :0} as ILocation,
    notes:[{content: ''}] as INote[]
}] as Iactivity[],
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
