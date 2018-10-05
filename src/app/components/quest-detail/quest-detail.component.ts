import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global/global.service';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.css']
})
export class QuestDetailComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit() {

  }

}
