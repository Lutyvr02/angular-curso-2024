import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { CounterComponent } from './counter/counter.component';
import { filter, from, map, tap } from 'rxjs';
import { AppColorsDirective } from './app-colors.directive';
import { CreateHtmlDirective } from './create-html.directive';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
interface IForm {
  name: string;
  score: string;
  school: string;
  proffesor: string;
  university: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserCardComponent,
    CalculatorComponent,
    CommonModule,
    PersonListComponent,
    CounterComponent,
    AppColorsDirective,
    CreateHtmlDirective,
    PurePipe,
    ImpurePipe,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  studentForm!: FormGroup;

  student2Form!: UntypedFormGroup;
  scoreControl = new FormControl<string>('', [Validators.required]);

  name: string = '';
  lastname: string = '';

  users = [
    { name: 'abc', email: 'abc@gmail.com' },
    { name: 'tyty', email: 'tyty@gmail.com' },
  ];
  selectedUser: any = this.users[0];

  result = 0;
  title = 'angular-course-2024';
  animals: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  students: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = 'hola';

  youtube = from([1, 2, 3, 4, 5, 6]);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private untypedFormBuilder: UntypedFormBuilder
  ) {
    this.scoreControl.valueChanges.subscribe((res) => {
      console.log('score value: ', res);
    });

    console.log('REST operator: ', this.sum2(2, 4, 6));
    console.log('Nullish Coalesing: ', this.var2 ?? this.var3);
    this.youtube.subscribe((res) => {
      console.log('sub 1: ', res);
    });

    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: [''],
    });
    this.studentForm.valueChanges.subscribe((res) => {
      console.log('FORM GROUP OBSERVABLE: ', res);
    });

    this.student2Form = this.untypedFormBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: [''],
    });
  }
  onSendData() {
    console.log('FORM GROUP: ', this.studentForm);
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  private sub(num1: number, num2: number): number {
    return num1 - num2;
  }

  public sum2(...persons: number[]) {
    //return persons[0] + persons[1]
    return persons.reduce(
      (acumulador, valorActual) => acumulador + valorActual
    );
  }

  public recieveData(data: any) {
    console.log('Print: ' + data);
  }

  public onResult(event: any) {
    this.result = event ?? 0;
  }

  addVideo() {
    this.youtube
      .pipe(
        map((res) => {
          console.log('map operator rxjs: ', res);
          if (res % 2 == 0) {
            return res;
          } else {
            return null;
          }
        }),
        tap((res) => {
          console.log('VAlue: ', res);
        }),
        filter((res: number | null) => res != null)
      )
      .subscribe((res) => {
        console.log('sub 2: ', res);
      });
  }

  userCardCreated: boolean = true;

  public getColor(value: any): void {
    console.log('value: ', value);
  }

  public sumPure(a: number, b: number): number {
    return a + b;
  }
  public sumImpure(a: number, b: number): number {
    return a + b + Math.random();
  }

  public addNumber() {
    this.students = [...this.students, 12];
  }

  public goToStudentModule() {
    this.router.navigate(['student']);
  }

  public goToCard() {
    this.router.navigate(['user-card', 1]);
  }

  public onCalculator() {
    this.router.navigate(['cal'], { queryParams: { name: 'jhon', age: 20 } });
  }

  public onSubmit(data: any) {
    console.log('template driven: ', data);
  }
  public onPrintScore() {
    console.log('Score: ', this.scoreControl.value);
  }
}
