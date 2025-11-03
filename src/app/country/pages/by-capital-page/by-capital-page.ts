import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';

@Component({
  selector: 'by-capital-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage { }
