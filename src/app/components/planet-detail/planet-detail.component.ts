import { Component, OnInit } from '@angular/core';
import { Quest } from '../../models/quest';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import * as actions from '../../store/actions'
import { GlobalService } from '../../services/global/global.service';
import { QuestService } from '../../services/quest/quest.service';
import { Router } from '@angular/router';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  quests: Quest[];
  newQuest: Quest = {} as Quest;
  isModalVisible: boolean = false;

  constructor(public router: Router, private store: Store<AppState>, private questService: QuestService, private globalService: GlobalService) { }

  ngOnInit() {
    this.store.dispatch(new actions.GetQuests());

    this.store.select('quest').subscribe(questState => {
      this.quests = questState.quests;
      this.globalService.quests = questState.quests;
    })
  }

  addQuest(): void {
    this.questService.addQuest(this.newQuest);
    this.newQuest = {} as Quest;
  }

  selectQuest(questSelected: Quest) : void {
    this.globalService.selectQuest(questSelected);
  }

  editQuest(): void {
    this.questService.editQuest(this.globalService.selectedQuest);
    this.globalService.selectedQuest = {} as Quest;
  }

  openModal(open: boolean): void {
    this.isModalVisible = open;
  }

  closeModal(close: boolean): void {
    this.isModalVisible = close;
    this.globalService.selectedQuest = {} as Quest;
  }

  removeQuest(): void {
    this.questService.removeQuest(this.globalService.selectedQuest);
    this.globalService.selectedQuest = {} as Quest;
  }

  questClicked(clickedQuest: Quest): void {
    this.globalService.selectQuest(clickedQuest);
    this.router.navigate(['planet-detail/quest-detail']);
  }

  navigateDashboard(): void {
    this.globalService.selectedPlanet = {} as Planet;
    this.router.navigate([''])
  }
}
