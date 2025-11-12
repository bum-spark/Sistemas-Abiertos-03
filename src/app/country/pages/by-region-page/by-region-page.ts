import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountryFull } from '../../../shared/interfaces/index.interface';
import { Country } from '../../../shared/services/country';

@Component({
  selector: 'by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage { 
  regions = signal<string[]>([]);
  countries = signal<CountryFull[]>([]);
  
  constructor(private countryService: Country){
    this.loadRegions();
  }

  loadRegions(){
    this.countryService.getRegions().subscribe({
      next: (data) => {
        this.regions.set(data);
        console.log('Regiones encontradas:', this.regions());
      },
      error: (error) => {
        console.log('Error:', error);
        this.regions.set([]);
      }
    });
  }

}
