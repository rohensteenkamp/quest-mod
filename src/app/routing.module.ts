import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { QuestDetailComponent } from './components/quest-detail/quest-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'planet-detail', component: PlanetDetailComponent },
  { path: 'planet-detail/quest-detail', component: QuestDetailComponent }
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

