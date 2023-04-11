import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CitiesSectionComponent } from './Components/cities-section/cities-section.component';
import { CityCardComponent } from './Components/city-card/city-card.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
   SearchBarComponent,
   CitiesSectionComponent,
   CityCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    
    // RouterModule.forChild(routes)
  ],
  exports: [
    SearchBarComponent,
    CitiesSectionComponent,
    CityCardComponent,
    ]
})
export class HomeModule { }
