import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './components/planet/planet.component';

const routes: Routes = [
  { path: '', component: PlanetComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
exports: [
  RouterModule
]
})
export class RoutingModule { }

