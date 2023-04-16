import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TripsSidebarComponent } from './trips-sidebar/trips-sidebar.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PhotoWallComponent } from './photo-wall/photo-wall.component';

const routes:Routes=[{path: '', component: TripComponent  },];


@NgModule({
  declarations: [TripComponent, TripsSidebarComponent, CreateTripComponent, PhotoWallComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
    ]
})
export class TripModule {

}
