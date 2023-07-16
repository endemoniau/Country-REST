import { Component } from '@angular/core';
import { Country } from '../dto/country';
import{ApiService} from './api.service';
import{CountryService} from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elendemo';
  
  countries:Country[]=[]; 
  countriesTmp:Country[]=[]; 
 countryName:Country;
 countryDetail:any;
  countriesCommon:any = []; 
  countriesFlag:any = []; 

  constructor(public _apiServ:ApiService, public _countryServ:CountryService) { }
  ngOnInit() {
    if (window.screen.width <= 425) { // 768px portrait
      var mobile = true;
     
    }
    document.getElementById("sidebardiv").classList.toggle('active');
  }
}
