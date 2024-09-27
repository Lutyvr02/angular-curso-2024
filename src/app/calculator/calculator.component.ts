import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, HistoryComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  box1Value:number = 0; 
  box2Value:number = 0;
  operationsHistory: { operation: string, result: number }[] = [];

  @Output() sum = new EventEmitter();
  @Output() mul = new EventEmitter();
  @Output() reset = new EventEmitter();

  public onSum() {
    const result = Number(this.box1Value) + Number(this.box2Value);
    this.sum.emit(result);
    this.operationsHistory.push({ operation: 'sum', result });
  }

  public onMul() {
    const result = Number(this.box1Value) * Number(this.box2Value);
    this.mul.emit(result);
    this.operationsHistory.push({ operation: 'mul', result });
  }

  public onReset(){  
    this.box1Value = 0
    this.box2Value = 0
    this.sum.emit(null)
    this.operationsHistory = []; // Reiniciar el historial al hacer reset
  }
}
