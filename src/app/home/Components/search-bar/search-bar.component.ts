import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/Search/Models/IResponse';
import { CityName } from 'src/app/Search/Models/city-name';
import { HomeSearchService } from '../../Services/home-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    searchInput : string = '';
    selectedCity!:CityName;
  constructor(private searchService: HomeSearchService , private router: Router) {}
  cityNames = Object.values(CityName);
  getSearchResults(){
    // if(this.cityNames.includes(this.selectedCity)) {
    //   return Object.values(CityName[this.selectedCity]);
    // }
    // this.searchService. getAllServices(this.searchInput ,parseInt(CityName[this.selectedCity]) ,0,8 ).subscribe({
    //   //  next:(data)=> this.router.navigate('/search/results')
    // })
    // return false;
  }
}
