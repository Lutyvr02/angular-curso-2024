import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';
import { data } from './data';
import { Student, Professor } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchComponent, 
    ListComponent,
    CardComponent,
    ItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-course-2024';

  items: (Student | Professor)[] = Object.values(data);
  filteredItems = this.items;
  selectedItem!: Student | Professor;

  onSearch(term: string) {
    this.filteredItems = this.items.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.lastName.toLowerCase().includes(term.toLowerCase())
    );
  }

  onItemSelect(item: Student | Professor) {
    this.selectedItem = item;
  }
 
}
