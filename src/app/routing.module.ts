import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
//  { path: '/planet-detail', component: PlanetDetailComponent }
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

