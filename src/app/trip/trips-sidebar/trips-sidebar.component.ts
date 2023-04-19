import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateTripComponent } from '../create-trip/create-trip.component';
import { Router } from '@angular/router';
import { TripService } from '../Services/trip.service';
import { Itrip } from '../Models/Itrip';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

@Component({
  selector: 'app-trips-sidebar',
  templateUrl: './trips-sidebar.component.html',
  styleUrls: ['./trips-sidebar.component.css']
})
export class TripsSidebarComponent {

  loggedUserObj = localStorage.getItem('loggedUser');
  loggedUserId = JSON.parse(this.loggedUserObj!).id;
  loggedUserFname = JSON.parse(this.loggedUserObj!).fname;
  loggedUserLname = JSON.parse(this.loggedUserObj!).lname;

  @Output() idEmitter = new EventEmitter<number>();
  dialogRef : MatDialogRef<CreateTripComponent,any> | null = null;

  constructor(private dialog: MatDialog, private tripService: TripService, private router: Router) { }
  ngOnInit() {
    this.getTrips();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTripComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getTrips();
    });
  }

  trips: Itrip[] = [];

  deleteTrip(id : number, name: string) {
    const dialogRef = this.dialog.open(DeleteTripComponent, {
      width: '450px',
      data: {id: id, name: name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getTrips();
    });    
  }
  displayTrip(id:number){
    this.idEmitter.emit(id);
    console.log(id);
  }

  getTrips(){
    this.tripService.GetAll(this.loggedUserId).subscribe({
      next: (trips:any) => {
        this.trips = trips;
        console.log(this.trips);
      },
      error: (err:any) => {
        console.log(err);
      }
    });    
  }
}
