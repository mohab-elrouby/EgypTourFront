import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingSerctionComponent } from './Components/landing-section/landing-serction.component';
import { ServiceComponent } from './Components/service/service.component';
import { ServiceDescriptionComponent } from './Components/service-description/service-description.component';
import { ReviewComponent } from './Components/review/review.component';
import { ReviewListComponent } from './Components/review-list/review-list.component';
import { ServicereviewformComponent } from './Components/servicereviewform/servicereviewform.component';
import { ConvertRatingToStarsPipe } from './Pipes/convert-rating-to-stars.pipe';
import { ImageCarouselComponent } from './Components/image-carousel/image-carousel.component';

const routes:Routes = [
  { path:'service', component: ServiceComponent }
];

@NgModule({
  declarations: [
    LandingSerctionComponent,
    ServiceDescriptionComponent,
    ReviewComponent,
    ReviewListComponent,
    ServicereviewformComponent,
    ConvertRatingToStarsPipe,
    ImageCarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [LandingSerctionComponent,ServiceDescriptionComponent,ReviewListComponent,ServicereviewformComponent]
})
export class ServiceModule { }
