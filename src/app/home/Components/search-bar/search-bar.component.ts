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
    selectedCity:string='';
    cityName:string='0';
    cityNames = Object.values(CityName).slice(0,5);


  constructor(private searchService: HomeSearchService , private router: Router) {}

}

