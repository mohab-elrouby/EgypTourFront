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
  data:{}={
    searchString:'',
    city:0,
  };
  constructor(private searchService: HomeSearchService , private router: Router) {}
  cityNames = Object.values(CityName).slice(0,5);
  getSearchResults(){
    if(this.cityNames.includes(this.selectedCity)) {
      // this.searchService. getAllServices(this.searchInput ,Number(Object.values(CityName).indexOf(this.selectedCity)) ,0,8 ).subscribe({})
      console.log(Number(Object.values(CityName).indexOf(this.selectedCity)))
    }
  }
}
    
