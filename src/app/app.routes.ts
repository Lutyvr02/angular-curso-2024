import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [

    {
        path: 'user-card',
        component: UserCardComponent
    },
    {
        path: 'cal',
        component: CalculatorComponent
    },
    {
        path: 'counter-nav',
        loadComponent: () => import('./counter/counter.component').then (m => m.CounterComponent)
    }
];
