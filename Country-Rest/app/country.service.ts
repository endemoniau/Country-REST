import { Injectable } from '@angular/core';
import{ApiService} from './api.service';
import { Country } from '../dto/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public _apiServ:ApiService) {}

  countryName:Country;  
  countries:Country[]; 
  countriesTmp:Country[]=[]; 
  countryDetail?:Country;
  bordersFlags:string[];
  bordersNames:string[];
  bordersCode:string[];
  countriesRegion:Country[];
  countriesSubregion:Country[];
  filterKeys:String[]=["population","continent","region","subregion"];
  filterData:any;
  imageLoading:string="https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif";
  flagTmp:any;
  coatTmp:any;

  getCountryDetail (country:Country){
    
    this._apiServ.get_country(country.name.common);
  }

  setSelectedCountry(country:Country){
    this.countryDetail=country;
    this.flagTmp=this.countryDetail.flags.png;
    this.coatTmp=this.countryDetail.coatOfArms.png;

    this.countryDetail.flags.png=this.imageLoading ;
    this.countryDetail.coatOfArms.png=this.imageLoading ;
    this.bordersNames=[];
    this.bordersFlags=[];
    this.bordersCode=[];
    if(this.countryDetail.borders){    
      this.countryDetail.borders.forEach(x => {
        this._apiServ.get_byCode(x).subscribe((res : any)=>{
          this.bordersNames.push(res[0].name.common);
          this.bordersFlags.push(res[0].flags.png)
          this.bordersCode.push(res[0].cca3);
        });
      });
   }
  }

  setCountriesBy(countryList:Array<Country>){
    this.countries=countryList;
  }

  thumbLoaded($event:Event){
    this.countryDetail.flags.png=this.flagTmp ;
    this.countryDetail.coatOfArms.png=this.coatTmp ;
  }

  moveNavBar(args:any):void{
    document.getElementById("sidebardiv").classList.toggle('active');
 } 
}