import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewEditPigComponent} from "./new-edit-pig.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'new'
  },
  {
    path: 'new',
    component: NewEditPigComponent
  },
  {
    path: ':id',
    component: NewEditPigComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEditPigRoutingModule {
}
