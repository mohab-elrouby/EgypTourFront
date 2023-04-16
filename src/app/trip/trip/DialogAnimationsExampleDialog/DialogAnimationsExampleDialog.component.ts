import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-DialogAnimationsExampleDialog',
  templateUrl: './DialogAnimationsExampleDialog.component.html',
  styleUrls: ['./DialogAnimationsExampleDialog.component.css']
})
export class DialogAnimationsExampleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>) {}

  ngOnInit() {
  }

}
