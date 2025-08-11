import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aboutmy', loadComponent: () => import('../my/about/about.component')
  },
  {
    path: 'myproyects', loadComponent: () => import('../my/proyects/proyects.component')
  },
  {
    path: 'myexperience', loadComponent: () => import('../my/experience/experience.component')
  },
  {
    path: 'myskills', loadComponent: () => import('../my/habilidades/habilidades.component')
  },
  {
    path: 'myeducation', loadComponent: () => import('../my/educacion/educacion.component')
  },
  {
    path: 'mycontacts', loadComponent: () => import('../my/contactos/contactos.component')
  },
  {
    path: 'mysettings', loadComponent: () => import('../my/settings/settings.component')
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class MyRoutingModule { }
