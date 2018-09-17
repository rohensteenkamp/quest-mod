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
  isModalVisible : boolean = false;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.planets$.subscribe(value => {
      this.planets = value;
      console.log(value);
    });
  }

  addPlanet(): void {
    this.planetService.addPlanet(this.newPlanet)
    this.newPlanet = {} as Planet;
  }
 
  removePlanet(): void {
    this.planetService.removePlanet(this.selectedPlanet);
    this.selectedPlanet = {} as Planet;
  }

  selectPlanet(planetToEdit: Planet): void {
    this.selectedPlanet = planetToEdit;
  }

  editPlanet(): void {
    this.planetService.editPlanet(this.selectedPlanet);
    this.selectedPlanet = {} as Planet;
  }

  openModal(open : boolean) : void {
    this.isModalVisible = open;
  }

  closeModal(close: boolean): void {
    this.isModalVisible = close;
    this.selectedPlanet = {} as Planet;
    console.log(this.selectedPlanet);
  }

}
