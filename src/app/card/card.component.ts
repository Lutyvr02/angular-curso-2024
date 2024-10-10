// card.component.ts
import { Component, Input } from '@angular/core';
import { Student, Professor } from '../models';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: Student | Professor;
  selectedTab = 'personal';

  filteredMessages: string[] = [];

  getAverageScore() {
    if (this.item && this.item.type === 'student') {
      const student = this.item as Student;
      return (
        (student.firstTestScore +
          student.secondTestScore +
          student.finalTestScore) /
        3
      );
    }
    return null;
  }
  onSearchMessages(searchText: string) {
    if (this.item?.messages) {
      this.filteredMessages = this.item.messages.filter((message) =>
        message.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
}
