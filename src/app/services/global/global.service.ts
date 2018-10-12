import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet';
import { Quest, QuestData } from '../../models/quest';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  selectedPlanet: Planet = {} as Planet;
  selectedQuest: Quest = {} as Quest;
  quests: Quest[];

  constructor() { }

  selectPlanet(planetSelected: Planet): void {
    this.selectedPlanet = planetSelected;
    console.log(this.selectedPlanet);
  }

  selectQuest(questSelected: Quest): void {
    this.selectedQuest = questSelected;
    console.log(this.selectedQuest);
  }
}
