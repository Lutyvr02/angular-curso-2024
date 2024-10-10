import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student, Professor } from '../models';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() items!: (Student | Professor)[];
  @Output() selectItem = new EventEmitter<Student | Professor>();

  onSelect(item: Student | Professor) {
    this.selectItem.emit(item);
  }

  onDelete(item: Student | Professor) {
    this.items = this.items.filter(i => i !== item);
  }
}
