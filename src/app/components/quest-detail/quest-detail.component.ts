import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global/global.service';
import { QuestService } from 'src/app/services/quest/quest.service';
import { Quest } from 'src/app/models/quest';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.css']
})
export class QuestDetailComponent implements OnInit {

  constructor(public globalService: GlobalService, private questService: QuestService) { }

  ngOnInit() {

  }

  editQuest(): void {
    this.questService.editQuest(this.globalService.selectedQuest);
    this.globalService.selectedQuest = {} as Quest;
  }

}
