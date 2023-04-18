import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from '../../trip/DialogAnimationsExampleDialog/DialogAnimationsExampleDialog.component';
import { TripService } from '../../Services/trip.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent {
  constructor(  public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>,
     private tripService: TripService,
     @Inject(MAT_DIALOG_DATA) public data: {id:string, name:string}){    
  }

  deleteTrip(){
    console.log(this.data.id);
    this.tripService.deletetrip(this.data.id).subscribe(
      response => {
        console.log('trip removed successfully!');
      },
      error => {
        console.error(error);
      }
    );
    this.dialogRef.close();
  }
}
