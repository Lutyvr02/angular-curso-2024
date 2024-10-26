import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../history/history.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, HistoryComponent, RouterLink],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  box1Value: number = 0;
  box2Value: number = 0;
  operationsHistory: { operation: string; result: number }[] = [];

  @Output() sum = new EventEmitter();
  @Output() mul = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {}

  onLogin() {
    this._authService.login();    
    this._router.navigate(['/student']);
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      console.log('query params: ', params);
    });
    console.log('calculator');
  }

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

  public onReset() {
    this.box1Value = 0;
    this.box2Value = 0;
    this.sum.emit(null);
    this.operationsHistory = []; // Reiniciar el historial al hacer reset
  }
}
