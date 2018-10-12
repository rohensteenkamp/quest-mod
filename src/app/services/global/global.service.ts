import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';
import { Quest, QuestData } from '../../models/quest';
import { Explorer } from 'src/app/models/explorer';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  selectedPlanet: Planet = {} as Planet;
  selectedQuest: Quest = {} as Quest;
  selectedExplorer: Explorer = {} as Explorer;
  selectedPlanetQuests: Quest[];

  constructor() { }

  selectPlanet(planetSelected: Planet): void {
    this.selectedPlanet = planetSelected;
    console.log(this.selectedPlanet);
  }

  selectQuest(questSelected: Quest): void {
    this.selectedQuest = questSelected;
    console.log(this.selectedQuest);
  }

  selectExplorer(explorerSelected: Explorer): void {
    this.selectedExplorer = explorerSelected;
    console.log(this.selectedExplorer);
  }
}
