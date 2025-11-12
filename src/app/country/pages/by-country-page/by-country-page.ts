import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryFull } from '../../../shared/interfaces/index.interface';
import { Country } from '../../../shared/services/country';

@Component({
  selector: 'by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {
  countries = signal<CountryFull[]>([]);
  constructor(private countryService: Country){}

  buscarPorCountry(busqueda: string){
    this.countryService.searchByCountry(busqueda).subscribe({
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
