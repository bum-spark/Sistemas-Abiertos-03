import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { CountryData } from '../../../shared/interfaces/country.interface';
import { CountryFull } from '../../../shared/interfaces/index.interface';

@Component({
  selector: 'country-list',
  imports: [CommonModule],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList { 
  //@Input() countries: CountryData[] = [];

  countries = input.required<CountryFull[]>();
}
