import { NgModule} from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomePageComponent } from './home/Components/home-page/home-page.component';
import { ServiceComponent } from './service/Components/service/service.component';
import { PostComponent } from './post/Components/post/post.component';
import { AuthGuard } from './authentication/Guards/auth.guard';
import { RouteGuard } from './authentication/Guards/route.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'comment',loadChildren:()=>import('src/app/comment/comment.module').then((m)=>m.CommentModule),canActivate: [AuthGuard]},
  {path:'tourist',loadChildren:()=>import('src/app/tourist/tourist.module').then((m)=>m.TouristModule),canActivate: [AuthGuard]},
  {path:'activity',loadChildren:()=>import('src/app/activity/activity.module').then((m)=>m.ActivityModule),canActivate: [AuthGuard]},
  {path:'localreview',loadChildren:()=>import('src/app/local-review/local-review.module').then((m)=>m.LocalReviewModule),canActivate: [AuthGuard]},
  {path:'servicereview',loadChildren:()=>import('src/app/service-review/service-review.module').then((m)=>m.ServiceReviewModule),canActivate: [AuthGuard]},
  {path:'service',component:ServiceComponent},
  {path:'localperson',loadChildren:()=>import('src/app/local-person/local-person.module').then((m)=>m.LocalPersonModule),canActivate: [AuthGuard]},
  {path:'post',component:PostComponent,canActivate: [AuthGuard]},
  {path:'user',loadChildren:()=>import('src/app/authentication/authentication.module').then((m)=>m.AuthenticationModule)},
  {path:'search',loadChildren:()=>import('src/app/Search/Search.module').then((m)=>m.SearchModule)},
  {path:'trips',loadChildren:()=>import('src/app/trip/trip.module').then((m)=>m.TripModule),canActivate: [AuthGuard]},
  {path: '**', component: HomePageComponent, canActivate: [RouteGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
