import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./core/pages/home/home.component'),
                title: 'Home'
            },
            {
                path: 'my',
                loadChildren: () => import('./core/my/my-routing.module'),
                title: 'I am'
            },
            {
                path: 'about',
                loadComponent: () => import('./core/pages/about/about.component'),
                title: 'About'
            }
        ]
    },
    { 
        path: 'notfound', 
        loadComponent: () => import('./core/pages/nofound/nofound.component')
    },
    { path: '**', redirectTo: 'notfound' }
];
