import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TripsSidebarComponent } from './trips-sidebar/trips-sidebar.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PhotoWallComponent } from './photo-wall/photo-wall.component';
import { DialogAnimationsExampleDialogComponent } from './trip/DialogAnimationsExampleDialog/DialogAnimationsExampleDialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TripScheduleComponent } from './trip/trip-schedule/trip-schedule.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const routes:Routes=[{path: '', component: TripComponent },
{path: 'schedule', component: TripScheduleComponent}
];


@NgModule({
  declarations: [TripComponent, TripsSidebarComponent, CreateTripComponent, PhotoWallComponent,DialogAnimationsExampleDialogComponent,TripScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    TextFieldModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
    ],
  exports:[
    TripComponent,
    DialogAnimationsExampleDialogComponent,
    TripScheduleComponent
    ]
})
export class TripModule {

}
