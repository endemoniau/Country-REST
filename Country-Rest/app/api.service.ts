import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../dto/country';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  countryDetail: any;

  baseUrl = 'https://restcountries.com/v3.1';

  constructor(private api_http: HttpClient) {}

  get_countries(): Observable<Country[]> {
    return this.api_http.get<Country[]>(this.baseUrl + '/all');
  }

  get_country(args: any): Observable<Country> {
    return this.api_http.get<Country>(
      this.baseUrl + '/name/' + args + '?fullText=true'
    );
  }

  get_byCode(args: any): Observable<Country> {
    return this.api_http.get<Country>(this.baseUrl + '/alpha/' + args);
  }

  get_byLanguage(args: any): Observable<Country> {
    return this.api_http.get<Country>(this.baseUrl + '/lang/' + args);
  }

  get_byRegion(args: any): Observable<Country> {
    return this.api_http.get<Country>(this.baseUrl + '/region/' + args);
  }

  get_bySubregion(args: any): Observable<Country> {
    return this.api_http.get<Country>(this.baseUrl + '/subregion/' + args);
  }
}
