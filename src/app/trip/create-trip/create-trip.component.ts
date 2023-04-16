import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {

  tripName: string = '';
  location: string = '';
  tripDate: Date = new Date();

  constructor(public dialogRef: MatDialogRef<CreateTripComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    // Here you can add your logic to create a new trip
    this.dialogRef.close();
  }

  isValid(): boolean {
    return this.tripName!= null && this.location!= null && this.tripDate != null;
  }


}
