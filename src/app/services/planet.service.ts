import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

import { PLANETS } from '../planets';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets:BehaviorSubject<Planet[]> = new BehaviorSubject(PLANETS);
  selectedPlanet: Subject<Planet> = new Subject();
  //newPlanet: Planet = new Planet();

constructor() { }

  getPlanets(): Planet[] {
    return PLANETS;
  }

  selectPlanet(planet: Planet) {
    this.selectedPlanet.next(planet);
  }

  /*getSelectedPlanet(): Planet {
    return this.selectedPlanet;
  }*/

  addPlanet(planetName: string) {
    if(planetName) {
      const newPlanet = new Planet();
      newPlanet.name = planetName;
      this.planets.next([newPlanet, ...this.planets.getValue()]);//.push(this.newPlanet);
    }
  }

}
