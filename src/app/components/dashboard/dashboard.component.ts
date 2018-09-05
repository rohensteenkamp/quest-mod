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
    //this.planetService.planets.subscribe(planets => this.setPlanets(planets))
    //this.planetService.selectedPlanet.subscribe(selectedPlanet => this.selectedPlanet = selectedPlanet)
    this.planets = this.planetService.getPlanets();
  }

  // selectPlanet(planet: Planet){
  //   this.planetService.selectPlanet(planet);
  // }

  addPlanet(newPlanet): void {
    this.planetService.addPlanet(this.newPlanet)
  }

  //removePlanet()

}
