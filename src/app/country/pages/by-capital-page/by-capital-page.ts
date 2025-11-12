import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';
import { Country } from '../../../shared/services/country';
import { CountryData } from '../../../shared/interfaces/country.interface';
import { CountryFull } from '../../../shared/interfaces/index.interface';

@Component({
  selector: 'by-capital-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countries = signal<CountryFull[]>([]);

  constructor(private countryService: Country) {}

  /*buscarPorCapital(busqueda: string){
    this.countryService.getCountriesByCapital(busqueda).subscribe({
      next: (data) => {
        this.countries.set(data);
        console.log('Países encontrados:', this.countries());
      },
      error: (error) => {
        console.log('Error:', error);
        this.countries.set([]);
      }
    });
  }*/

    buscarPorCapital(busqueda: string){
    this.countryService.searchByCapital(busqueda).subscribe({
      next: (data) => {
        this.countries.set(data);
        console.log('Países encontrados:', this.countries());
      },
      error: (error) => {
        console.log('Error:', error);
        this.countries.set([]);
      }
    });
  }
}
