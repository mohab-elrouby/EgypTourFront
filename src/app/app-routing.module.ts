import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/Components/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'comment',loadChildren:()=>import('src/app/comment/comment.module').then((m)=>m.CommentModule)},
  {path:'tourist',loadChildren:()=>import('src/app/tourist/tourist.module').then((m)=>m.TouristModule)},
  {path:'trip',loadChildren:()=>import('src/app/trip/trip.module').then((m)=>m.TripModule)},
  {path:'activity',loadChildren:()=>import('src/app/activity/activity.module').then((m)=>m.ActivityModule)},
  {path:'localreview',loadChildren:()=>import('src/app/local-review/local-review.module').then((m)=>m.LocalReviewModule)},
  {path:'servicereview',loadChildren:()=>import('src/app/service-review/service-review.module').then((m)=>m.ServiceReviewModule)},
  {path:'service',loadChildren:()=>import('src/app/service/service.module').then((m)=>m.ServiceModule)},
  {path:'localperson',loadChildren:()=>import('src/app/local-person/local-person.module').then((m)=>m.LocalPersonModule)},
  {path:'post',loadChildren:()=>import('src/app/post/post.module').then((m)=>m.PostModule)},
  {path:'user',loadChildren:()=>import('src/app/authentication/authentication.module').then((m)=>m.AuthenticationModule)},
  {path:'search/:page',loadChildren:()=>import('src/app/Search/Search.module').then((m)=>m.SearchModule)},
  {path:'trips',loadChildren:()=>import('src/app/trip/trip.module').then((m)=>m.TripModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
