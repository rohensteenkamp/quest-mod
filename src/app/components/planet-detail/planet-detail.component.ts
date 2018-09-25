import { Component, OnInit } from '@angular/core';
import { Quest } from '../../models/quest';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import * as actions from '../../store/actions'
import { GlobalService } from '../../services/global/global.service';
import { QuestService } from '../../services/quest/quest.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  quests: Quest[];
  newQuest: Quest = {} as Quest;

  constructor(private store: Store<AppState>, private questService: QuestService, private globalService: GlobalService) { }

  ngOnInit() {
    this.store.dispatch(new actions.GetQuests());

    this.store.select('quest').subscribe(questState => {
      this.quests = questState.quests;
    })
  }

  addQuest(): void {
    this.questService.addQuest(this.newQuest);
    this.newQuest = {} as Quest;
  }

  selectQuest(questSelected: Quest) : void {
    this.globalService.selectQuest(questSelected);
  }

}
