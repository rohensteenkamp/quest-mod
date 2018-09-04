import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';

import { PlanetService } from '../../services/planet.service'

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets: Planet[];
  selectedPlanet: Planet;

  constructor(private planetService: PlanetService) { }


  setPlanets(planets){
    console.log(planets);
    this.planets = planets;
  }

  ngOnInit() {
    this.planetService.planets.subscribe(planets => this.setPlanets(planets))
    this.planetService.selectedPlanet.subscribe(selectedPlanet => this.selectedPlanet = selectedPlanet)
    //this.getPlanets();
    //this.getSelectedPlanet();
  }

  selectPlanet(planet: Planet){
    this.planetService.selectPlanet(planet);
  }

  /*getPlanets(): void {
    this.planets = this.planetService.getPlanets();
  }*/
  
  /*getSelectedPlanet(): void {
    this.selectedPlanet = this.planetService.getSelectedPlanet();
  }*/

  addPlanet(name: string): void {
    this.planetService.addPlanet(name)
  }

}
