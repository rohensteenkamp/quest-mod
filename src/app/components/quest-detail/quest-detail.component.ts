import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global/global.service';
import { QuestService } from 'src/app/services/quest/quest.service';
import { Quest } from 'src/app/models/quest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.css']
})
export class QuestDetailComponent implements OnInit {
  isModalVisible: boolean = false;

  constructor(public globalService: GlobalService, private questService: QuestService, public router: Router) { }

  ngOnInit() {

  }

  editQuest(): void {
    if(this.globalService.selectedQuest.prerequisites == "none") {
      this.globalService.selectedQuest.prerequisites = "";
    }
    this.questService.editQuest(this.globalService.selectedQuest);
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
    this.router.navigate(['planet-detail'])
  }

}
