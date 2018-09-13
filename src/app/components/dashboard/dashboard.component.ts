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
  newPlanet: Planet = {} as Planet;
  selectedPlanet: Planet = {} as Planet;
  selectedIndex: number;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.planets$.subscribe(value => this.planets = value);
  }

  addPlanet(): void {
    this.planetService.addPlanet(this.newPlanet)
    this.newPlanet = {} as Planet;
  }
 
  removePlanet(planetToDelete: Planet): void {
    this.planetService.removePlanet(planetToDelete);
  }

  selectPlanet(planetToEdit: Planet): void {
    this.selectedPlanet = planetToEdit;
  }

  editPlanet(): void {
    this.planetService.editPlanet(this.selectedPlanet);
    this.selectedPlanet = {} as Planet;
  }

}
