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

  addPlanet(planet: Planet) {
    if(planet.name && planet.description) {
      this.planets.push(planet);
      // this.planets.next([newPlanet, ...this.planets.getValue()]); 
    }
  }

  removePlanet(planet: Planet) {
    const index: number = this.planets.indexOf(planet);
    this.planets.splice(index);     
}

}
