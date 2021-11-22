import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'descripcion-planets',
    loadChildren: () => import('./descripcion-planets/descripcion-planets.module').then( m => m.DescripcionPlanetsPageModule)
  },
  {
    path: 'descripcion-people',
    loadChildren: () => import('./descripcion-people/descripcion-people.module').then( m => m.DescripcionPeoplePageModule)
  },
  {
    path: 'descripcion-people',
    loadChildren: () => import('./descripcion-people/descripcion-people.module').then( m => m.DescripcionPeoplePageModule)
  },
  {
    path: 'descripcion-people',
    loadChildren: () => import('./descripcion-people/descripcion-people.module').then( m => m.DescripcionPeoplePageModule)
  },
  {
    path: 'descripcion-starships',
    loadChildren: () => import('./descripcion-starships/descripcion-starships.module').then( m => m.DescripcionStarshipsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
