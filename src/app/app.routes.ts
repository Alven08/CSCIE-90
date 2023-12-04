import { Routes } from '@angular/router';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { OtherScreenComponent } from './other-screen/other-screen.component';
import { HealthCheckComponent } from './health-check/health-check.component';

export const routes: Routes = [
    { path: '', redirectTo: '/first-screen', pathMatch: 'full' },
    { path: 'first-screen', component: FirstScreenComponent, title: 'First Screen' },
    { path: 'other-screen', component: OtherScreenComponent, title: 'Other Screen' },
    { path: 'health-check', component: HealthCheckComponent, title: 'Health Check Screen' }
];
