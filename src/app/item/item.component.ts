import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student, Professor } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item!: Student | Professor;
  @Output() select = new EventEmitter<void>();

  getBackgroundColor() {
    if (this.item.type === 'student') return 'lightblue';
    if (this.item.type === 'professor') return 'lightcoral';
    return '';
  }

  onSelect() {
    this.select.emit();
  }
}