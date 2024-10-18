import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [

    {
        path: 'user-card/:studentId',
        component: UserCardComponent,
        title:'user card test title'
    },
    {
        path: 'cal',
        component: CalculatorComponent
    },
    {
        path: 'counter-nav',
        // we can add more logic here
        loadComponent: () => import('./counter/counter.component').then (m => m.CounterComponent)
    },
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then (m => m.StudentModule)
    }
];
