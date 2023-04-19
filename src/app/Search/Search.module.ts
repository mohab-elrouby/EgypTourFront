import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './Search.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchCardComponent } from './Search-Card/Search-Card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PostModule } from '../post/post.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarComponent } from '../home/Components/search-bar/search-bar.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

const routes:Routes =[
{ path:'', component: SearchComponent  },

]
@NgModule({

  declarations: [SearchComponent,
    SearchCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatPaginatorModule,
    RouterModule
  ]
  ,
  exports:[
    SearchComponent,
    SearchCardComponent,
  ]
})
export class SearchModule { }
