import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CitiesSectionComponent } from './Components/cities-section/cities-section.component';
import { CityCardComponent } from './Components/city-card/city-card.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DescriptionSectionComponent } from './Components/description-section/description-section.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   SearchBarComponent,
   CitiesSectionComponent,
   CityCardComponent,
   DescriptionSectionComponent,
  ],
  imports: [
  MatCardModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule  
    // RouterModule.forChild(routes)
  ],
  exports: [
    SearchBarComponent,
    CitiesSectionComponent,
    CityCardComponent,
    DescriptionSectionComponent
    ]
})
export class HomeModule { }
