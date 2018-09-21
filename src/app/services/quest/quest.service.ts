import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Quest } from '../../models/quest';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  quests$: Observable<any[]>;
  questCollection: AngularFirestoreCollection<Quest>; 

  constructor(db: AngularFirestore) { 
    this.questCollection = db.collection<Quest>("quests");
  }
}
