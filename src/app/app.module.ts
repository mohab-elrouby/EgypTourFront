import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent} from './Components/navbar/navbar.component'
import { HomePageComponent } from './home/Components/home-page/home-page.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './Components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceModule } from './service/service.module';
import { ServiceComponent } from './service/Components/service/service.component';
import { PostComponent } from './post/Components/post/post.component';
import { PostModule } from './post/post.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    ServiceComponent,
    PostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    ServiceModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
