import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pigs-list'
  },
  {
    path: 'pigs-list',
    loadChildren: () => import('./pages/pigs-list/pigs-list.module').then(m => m.PigsListModule)
  },
  {
    path: 'pig',
    loadChildren: () => import('./pages/new-edit-pig/new-edit-pig.module').then(m => m.NewEditPigModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
