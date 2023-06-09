import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CitiesSectionComponent } from './Components/cities-section/cities-section.component';
import { CityCardComponent } from './Components/city-card/city-card.component';
import {MatCardModule} from '@angular/material/card';
import { HomePageComponent } from './Components/home-page/home-page.component';


// const routes:Routes=[
// ]
@NgModule({
  declarations: [
   SearchBarComponent,
   CitiesSectionComponent,
   CityCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,

    // RouterModule.forChild(routes)
  ],
  exports: [
    SearchBarComponent,
    CitiesSectionComponent,
    CityCardComponent,
    ]
})
export class HomeModule { }
