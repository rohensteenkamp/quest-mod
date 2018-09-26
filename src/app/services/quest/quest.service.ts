import { Injectable } from '@angular/core';
import { Quest, QuestData } from '../../models/quest';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { GlobalService } from '../global/global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  quests$: Observable<any[]>;
  questCollection: AngularFirestoreCollection<Quest>; 

  constructor(db: AngularFirestore, private globalService: GlobalService) { 
    this.questCollection = db.collection<Quest>("planets/" + this.globalService.selectedPlanet.key + "/quests");
    
    this.quests$ = db.collection("planets/" + this.globalService.selectedPlanet.key + "/quests").snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => new Quest(action.payload.doc.id, action.payload.doc.data() as QuestData));
      })
    );
  }

  addQuest(quest: Quest) {
    if(quest.prerequisites == undefined){
      quest.prerequisites = "";
      this.questCollection.add(quest);
    }
    else {
      this.questCollection.add(quest);
    }
  }

  editQuest(quest: Quest) {
    this.questCollection.doc(quest.key).update(quest.toData());
  }

  removeQuest(quest: Quest) {
    this.questCollection.doc(quest.key).delete();
  }
}
