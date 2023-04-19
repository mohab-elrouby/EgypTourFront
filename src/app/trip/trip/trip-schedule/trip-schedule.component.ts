import { Component,ElementRef, Input, OnInit,OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IActivity } from '../../Models/IActivity';
import { TripService } from '../../Services/trip.service';
@Component({
  selector: 'app-trip-schedule',
  templateUrl: './trip-schedule.component.html',
  styleUrls: ['./trip-schedule.component.css']
})
export class TripScheduleComponent implements OnInit,OnChanges {


processing: boolean = false;

  numberOfColumns:number=1;
  uniqueColumns:string[]=[];
  Data:{column:string,data:{id?:number,name:string}[]}[] = [
  ];

  @Input() activities!:IActivity[];

  @Input() tripId!:number;

  readonly:boolean=true;
  constructor(private tripService: TripService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!(this.tripId===undefined)){
      this.UpdateActivities();
    }
  }

  addedActivity!:IActivity;

  ngOnInit() {
  }

  drop(event: CdkDragDrop<{id?:number,name:string}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.UpdateActivitiesColumnsFromData();
  }

  Addcard(index:number){

    this.Data[index].data.push({name:'untiteld'});
    this.addedActivity={name:'untiteld',
      tag:this.Data[index].column,
      start:new Date(),
      end:new Date(),
      description:''
     }
     this.tripService.AddActivity(this.tripId,this.addedActivity)
      .subscribe(arg => {
        console.log(arg);
        this.UpdateActivities();
      });
  }

  ToggleReadOnly(card:{id?:number,name:string}){
    if(this.readonly==true){
      this.readonly=false;
    }
    else{
      console.log(card);
      this.readonly=true;
      this.processing=true;
     var activity = this.activities.find(i=>i.id==card.id);
     if(activity === undefined){
       console.log("activity Does'nt exist");
     }
     else{
      activity.name=card.name;
      console.log(activity);
       this.tripService.UpdateActiviy(Number(activity.id),activity).subscribe(
        arg=>{
          console.log(arg);
          this.UpdateActivities();
        }
       );
     }
    }
  }
  AddColumn(){
    this.addedActivity={name:'untiteld',
    tag:`Column${this.numberOfColumns}`,
    start:new Date(),
    end:new Date(),
    description:''
   }
   this.tripService.AddActivity(this.tripId,this.addedActivity).subscribe(arg=>{
    console.log(arg);
    this.Data.push({column:`Column${this.numberOfColumns}`,data:[{name:'untiteld'}]});
    this.numberOfColumns+=1;
    this.UpdateActivities();
   })
  }

  UpdateActivities():void{
    this.processing=true;
    this.tripService.GetById(this.tripId).subscribe(trip =>{
      this.activities=trip.activities;
      this.processing=false;
      this.UpdateView();
   });
   this.Data.splice(0);
  }

  UpdateView():void{
    this.activities.forEach((activity) => {
      if(!this.Data.some(i=>i.column==activity.tag)){
        this.Data.push({column:activity.tag,data:[]})
      }

    });
    this.activities.forEach(element => {
      this.Data.forEach(e=>{
        if(element.tag==e.column){
          e.data.push({id:element.id,name:element.name})
        }
      });
    });
  }

  UpdateActivitiesColumnsFromData():void{
    this.Data.forEach(element => {
         element.data.forEach(e => {
          var activity = this.activities.find(a=>a.id==e.id);
          if(!(activity===undefined)){
            if(activity.tag!=element.column){
              this.processing=true;
              activity.tag=element.column;
              this.tripService.UpdateActiviy(Number(activity.id), activity).subscribe(i=>{
                this.processing=false;
              });
            }
     }
    });
    });

    //update activities to database
    this.tripService.GetById(this.tripId).subscribe(t=>{
      t.activities=this.activities;

    })

  }
}




