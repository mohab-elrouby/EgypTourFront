import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TripService } from '../Services/trip.service';
import { Router } from '@angular/router';
import { Itrip } from '../Models/Itrip';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {
  addTripForm:FormGroup;
  loggedUserObj = localStorage.getItem('loggedUser');
  loggedUserId = JSON.parse(this.loggedUserObj!).id;
  loggedUserFname = JSON.parse(this.loggedUserObj!).fname;
  loggedUserLname = JSON.parse(this.loggedUserObj!).lname;

  trip : Itrip = {
    name:"",
    description:"",
    start: new Date(),
    end: new Date(),
    backgroundImage: "",
    ownerId: this.loggedUserId
  } as Itrip;


  constructor(public dialogRef: MatDialogRef<CreateTripComponent>,
     private tripService: TripService, private router: Router, private fb:FormBuilder ) {
      this.addTripForm = this.fb.group ({
        tripName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(29)]],
        description : ['', []],
        start : ['', [Validators.required]],
        end : ['',[Validators.required] ]
      })
     }

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    // Here you can add your logic to create a new trip
    console.log(this.trip);
    if(this.isValid()){
      console.log(this.trip);
      this.tripService.addtrip(this.trip).subscribe(
        response => {
          console.log('trip added successfully!');
        },
        error => {
          console.error(error);
        }
      );
      this.dialogRef.close();
    }    
  }

  isValid(): boolean {
    const controls = this .addTripForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log(name)
        return false;
      }
    }
    return true;
  }



  get tripName(){
    return this.addTripForm.get('tripName');
  }

  get description(){
    return this.addTripForm.get('description');
  }

  get start(){
    return this.addTripForm.get('start');
  }

  get end(){
    return this.addTripForm.get('end');
  }

}
