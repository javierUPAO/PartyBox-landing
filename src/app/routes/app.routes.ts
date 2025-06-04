import { Routes } from '@angular/router';
import { Landing } from '../pages/landing/landing';

export const routes: Routes = [ 
    { path: 'inicio', component: Landing },
     { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' } 
];
