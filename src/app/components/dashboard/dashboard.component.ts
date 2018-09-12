import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';

import { PlanetService } from '../../services/planet.service'

@Component({
  selector: 'app-planet',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  planets: Planet[];
  //selectedPlanet: Planet;
  newPlanet: Planet = {} as Planet;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.planets$.subscribe(value => this.planets = value);
  }

  // selectPlanet(planet: Planet){
  //   this.planetService.selectPlanet(planet);
  // }

  addPlanet(): void {
    this.planetService.addPlanet(this.newPlanet)
    this.newPlanet = {} as Planet;
  }
 
  removePlanet(planetToDelete: Planet): void {
    this.planetService.removePlanet(planetToDelete);
  }

  showAlert() {
    alert;
  }

}
