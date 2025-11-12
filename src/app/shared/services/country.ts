import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryData } from '../interfaces/country.interface';
import { CountryFull } from '../interfaces/index.interface'

@Injectable({
  providedIn: 'root'
})
export class Country {

  private url = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  public getCountriesByCapital(capital: string): Observable<CountryData[]> {
    const endpoint = `${this.url}capital/${capital}`;
    return this.http.get<any[]>(endpoint).pipe(
      map(data => {
        return data.map(country => {
          return {
            flag: country.flag || '🏳️',
            flagSvg: country.flags.svg,
            name: country.name.common,
            capital: country.capital[0],
            population: country.population
          };
        });
      })
    );
  }

  searchByCapital(capital: string) : Observable<CountryFull[]>{
    const endpoint = `${this.url}capital/${capital}`;
    return this.http.get<CountryFull[]>(endpoint); 
  }

  searchByCountry(country: string) : Observable<CountryFull[]>{
    const endpoint = `${this.url}name/${country}`;
    return this.http.get<CountryFull[]>(endpoint); 
  }

  getRegions(): Observable<string[]>{
    const endpoint = `${this.url}all?fields=region`;
    return this.http.get<any[]>(endpoint).pipe(
      map(data => {
        const regions = data.map(country => country.region).filter(region => region);
        return [...new Set(regions)].sort();
      })
    );
  }

  getCountriesByRegion(region: string): Observable<CountryFull[]>{
    const endpoint = `${this.url}region/${region}`;
    return this.http.get<CountryFull[]>(endpoint);
  }
}
