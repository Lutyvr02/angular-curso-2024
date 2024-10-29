import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AuthGuard } from './auth.guard';
import { GuardForm } from './guard-form.guard';
import { LoadGuard } from './load.guard';

export const routes: Routes = [

    {
        path: 'user-card/:studentId',
        component: UserCardComponent,
        title:'user card test title'
    },
    {
        path: 'cal',
        component: CalculatorComponent,
        canDeactivate: [GuardForm]
        
    },
    {
        path: 'counter-nav',
        // we can add more logic here
        loadComponent: () => import('./counter/counter.component').then (m => m.CounterComponent)
    },
    {
        path: 'student',
        title: 'Student',
        canActivate: [AuthGuard],
        canMatch:[LoadGuard],
        loadChildren: () => import('./student/student.module').then (m => m.StudentModule)
    }
];
