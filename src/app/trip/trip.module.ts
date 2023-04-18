import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DialogAnimationsExampleDialogComponent } from './trip/DialogAnimationsExampleDialog/DialogAnimationsExampleDialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TripScheduleComponent } from './trip/trip-schedule/trip-schedule.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

const routes:Routes=[{path: '', component: TripComponent },
{path: 'schedule', component: TripScheduleComponent}
];


@NgModule({
  declarations: [TripComponent,DialogAnimationsExampleDialogComponent,TripScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatDialogModule,
    TextFieldModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule
    ],
  exports:[
    TripComponent,
    DialogAnimationsExampleDialogComponent,
    TripScheduleComponent
  ]
})
export class TripModule {

}
