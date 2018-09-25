import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet/planet.service'
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import * as actions from '../../store/actions';
import { GlobalService } from '../../services/global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  planets: Planet[];
  newPlanet: Planet = {} as Planet;
  isModalVisible : boolean = false;

  constructor(public router: Router, private planetService: PlanetService, private store: Store<AppState>, private globalService: GlobalService) { }

  ngOnInit() {
    this.store.dispatch(new actions.GetPlanets);

    this.store.select("planet").subscribe(planetState =>{
      this.planets = planetState.planets;
    })
  }

  addPlanet(): void {
    this.planetService.addPlanet(this.newPlanet)
    this.newPlanet = {} as Planet;
  }

  selectPlanet(planetSelected: Planet): void {
    this.globalService.selectPlanet(planetSelected);
  }

  editPlanet(): void {   
    this.planetService.editPlanet(this.globalService.selectedPlanet);
    this.globalService.selectedPlanet = {} as Planet;
  }
 
  removePlanet(): void {
    this.planetService.removePlanet(this.globalService.selectedPlanet);
    this.globalService.selectedPlanet = {} as Planet;
  }

  planetClicked(planetClicked: Planet): void {
    this.globalService.selectPlanet(planetClicked);
    this.router.navigate(['planet-detail']);
  }

  openModal(open : boolean) : void {
    this.isModalVisible = open;
  }

  closeModal(close: boolean): void {
    this.isModalVisible = close;
    this.globalService.selectedPlanet = {} as Planet;
  }
}
