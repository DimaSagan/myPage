import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home-page', pathMatch: 'full' },
    {path:'home-page', loadComponent:()=>import('./pages/home-page/home-page.component').then(m=>m.HomePageComponent)}
];
