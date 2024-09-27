import { CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  @Input() operationsHistory: {operation: string, result: number}[] = [];
}
