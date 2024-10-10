import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchChange = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchChange.emit(value);
  }
}
