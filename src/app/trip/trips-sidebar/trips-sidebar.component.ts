import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTripComponent } from '../create-trip/create-trip.component';
import { Router } from '@angular/router';
import { TripService } from '../Services/trip.service';

@Component({
  selector: 'app-trips-sidebar',
  templateUrl: './trips-sidebar.component.html',
  styleUrls: ['./trips-sidebar.component.css']
})
export class TripsSidebarComponent {

  constructor(private dialog: MatDialog, private tripService: TripService, private router: Router) { }
  ngOnInit() {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(CreateTripComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass:'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //   trips = [
  //     { name: 'Trip 1' },
  //     { name: 'Trip 2' },
  //     { name: 'Trip 3' },
  //     { name: 'Trip 1' },
  //     { name: 'Trip 2' },
  //     { name: 'Trip 3' },
  //     { name: 'Trip 1' },
  //     { name: 'Trip 2' },
  //     { name: 'Trip 3' },
  //     { name: 'Trip 1' },
  //     { name: 'Trip 2' },
  //     { name: 'Trip 3' },
  //     { name: 'Trip 1' },
  //     { name: 'Trip 2' }
  //   ];

  trips: string[] = ['Trip 1', 'Trip 2',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4',
    'Trip 3', 'Trip 4'
  ];

  deleteTrip(trip: string) {
    const index = this.trips.indexOf(trip);
    if (index !== -1) {
      this.trips.splice(index, 1);
    }
  }
}
