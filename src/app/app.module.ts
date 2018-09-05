import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RoutingModule } from './/routing.module';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
