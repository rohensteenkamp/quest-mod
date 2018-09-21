import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  selectedPlanet: Planet = {} as Planet;

  constructor() { }

  selectPlanet(planetSelected: Planet): void {
    this.selectedPlanet = planetSelected;
    console.log(this.selectedPlanet);
    
  }
}
