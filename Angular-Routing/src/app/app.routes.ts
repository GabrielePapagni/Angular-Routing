import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GenericComponent } from './generic/generic.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'generic/:id', component: GenericComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'fruits', component: FruitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}