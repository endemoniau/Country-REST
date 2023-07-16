import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  countryDetail?: any;
  countries: any;
  countryName: any;
  countryBorders: string[] = [];

  constructor(
    public _apiServ: ApiService,
    public _countryServ: CountryService
  ) {}

  ngOnInit() {}

  borderClick(event: Event, border: any) {
    this._apiServ.get_byCode(border).subscribe((resborder: any) => {
      this._countryServ.setSelectedCountry(resborder[0]);
    });
  }

  languageClick(event: Event, language: any) {
    this._apiServ.get_byLanguage(language).subscribe((language: any) => {
      this._countryServ.setCountriesBy(language);
      this._countryServ.moveNavBar(event);
    });
  }

  regionClick(event: Event, region: any) {
    this._apiServ.get_byRegion(region).subscribe((region: any) => {
      this._countryServ.setCountriesBy(region);
      this._countryServ.moveNavBar(event);
    });
  }

  subRegionClick(event: Event, subregion: any) {
    this._apiServ.get_bySubregion(subregion).subscribe((subregion: any) => {
      this._countryServ.setCountriesBy(subregion);
      this._countryServ.moveNavBar(event);
    });
  }
}
