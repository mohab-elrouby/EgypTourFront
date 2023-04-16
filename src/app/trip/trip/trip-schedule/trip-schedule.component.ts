import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-trip-schedule',
  templateUrl: './trip-schedule.component.html',
  styleUrls: ['./trip-schedule.component.css']
})
export class TripScheduleComponent implements OnInit {

  data:[]=[];
  Data = [
    {
      column:'todo',
      data:['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']
    },
  ];


  readonly:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
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
  }

  Addcard(index:number){
    this.Data[index].data.push('untiteld');
  }

  ToggleReadOnly(){
    if(this.readonly==true){
      this.readonly=false;
    }
    else{
      this.readonly=true;
    }
  }
  AddColumn(){
    this.Data.push({column:'Column',data:['untiteld']});
  }
}
