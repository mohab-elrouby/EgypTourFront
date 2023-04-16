import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './Search.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchCardComponent } from './Search-Card/Search-Card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
const routes:Routes =[
{ path: '', component: SearchComponent  },

]
@NgModule({

  declarations: [SearchComponent,
    SearchCardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
  ,
  exports:[
    SearchComponent,
    SearchCardComponent,
  ]
})
export class SearchModule { }
