import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoutingModule } from './/routing.module';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as reducers from './store/reducers';
import * as effects from './store/effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { QuestDetailComponent } from './components/quest-detail/quest-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanetDetailComponent,
    QuestDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot({planet: reducers.planetReducer, quest: reducers.questReducer, explorer: reducers.explorerReducer}),
    EffectsModule.forRoot([effects.PlanetEffects, effects.QuestEffects, effects.ExplorerEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
