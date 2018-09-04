import { Component, OnInit } from '@angular/core';
import { PLANETS } from '../planets';

import { Planet } from '../planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets = PLANETS;

  newPlanet: Planet = new Planet();
  selectedPlanet: Planet;

  addPlanet(planetName: string) {
    if(planetName) {
      this.newPlanet.name = planetName;
      this.planets.push(this.newPlanet);
    }
  }

  viewPlanet(planet: Planet) {
    this.selectedPlanet = planet;
  }

  constructor() { }

  ngOnInit() {

}

}
