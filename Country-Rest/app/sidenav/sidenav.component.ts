import { Component, OnInit } from '@angular/core';
import { Country } from '../../dto/country';
import { ApiService } from '../api.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  countryName: Country;

  constructor(
    public _apiServ: ApiService,
    public _countryServ: CountryService
  ) {}

  ngOnInit() {
    this._apiServ.get_countries().subscribe((res: any) => {
      this._countryServ.countriesTmp = res.sort((a: Country, b: Country) =>
        a.name.common.localeCompare(b.name.common)
      );
      this._countryServ.countries = this._countryServ.countriesTmp;
    });
  }

  search_countries(args: any): void {
    this._countryServ.countries = this._countryServ.countries.filter((elem) =>
      elem.name.common.toLowerCase().includes(args.toLowerCase())
    );

    const filterField = this._countryServ.filterKeys.find((obj) => {
      if (obj === args.toLowerCase()) {
        this._countryServ.countries = this._countryServ.countriesTmp;

        switch (obj) {
          case 'population': {
            this._countryServ.countries.sort((a: Country, b: Country) =>
              a.population > b.population ? 1 : -1
            );
            break;
          }
          case 'continent': {
            this._countryServ.countries.sort((a: Country, b: Country) =>
              a.continents > b.continents ? 1 : -1
            );
            break;
          }
          case 'region': {
            this._countryServ.countries.sort((a: Country, b: Country) =>
              a.region > b.region ? 1 : -1
            );
            break;
          }
          case 'subregion': {
            this._countryServ.countries.sort((a: Country, b: Country) =>
              a.subregion > b.subregion ? 1 : -1
            );
            break;
          }
        }
      }
    });
  }

  click_countries(country: any, args: Event): void {
    this._countryServ.setSelectedCountry(country);
    this._countryServ.moveNavBar(args);
  }

  refresh_countries(args: any): void {
    this.countryName = null;
    this._countryServ.countries = this._countryServ.countriesTmp.sort(
      (a: Country, b: Country) => a.name.common.localeCompare(b.name.common)
    );
  }
}
