import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';


// import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  // planets: BehaviorSubject<Planet[]> = new BehaviorSubject(null);
  // selectedPlanet: Subject<Planet> = new Subject();
  planets: Planet[] = [
    { name:'codeez', description: 'learn to code with python' },
    { name:'checkmate!', description: 'learn to play chess' }
];

constructor() { }

  getPlanets(): Planet[] {
    return this.planets; 
  }

  // selectPlanet(planet: Planet) {
  //   this.selectedPlanet.next(planet);
  // }

  addPlanet(planetName: string, planetDescription: string) {
    if(planetName && planetDescription) {
      const newPlanet = new Planet();
      newPlanet.name = planetName;
      newPlanet.description = planetDescription;
      this.planets.push(newPlanet);
      // this.planets.next([newPlanet, ...this.planets.getValue()]); 
    }
  }

}
