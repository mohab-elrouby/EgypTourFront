import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const routes:Routes=[{path: '', component: TripComponent  },];


@NgModule({
  declarations: [TripComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule
  ]
})
export class TripModule {

}
