import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
const routes:Routes=[{path: '', component: TripComponent  },];


@NgModule({
  declarations: [TripComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TripModule {

}
