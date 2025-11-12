import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {
  @Output() onSearch = new EventEmitter<string>();

  buscar(termino: string) {
    this.onSearch.emit(termino);
  }
}
