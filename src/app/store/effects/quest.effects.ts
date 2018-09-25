import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Actions, Effect } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { Quest, QuestData } from "../../models/quest";
import { GlobalService } from "../../services/global/global.service";
import * as actions from '../actions';

@Injectable()
export class QuestEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private globalService: GlobalService) {}

    @Effect()
    GetQuests$ = this.actions$.ofType(actions.GET_QUESTS).pipe(
        switchMap(action => {
            console.log("action");
            return this.db.collection("planets/" + this.globalService.selectedPlanet.key + "/quests").stateChanges();
        }),
        mergeMap(actions => actions),
        map(action => {
            if(action.type === "added")
                return new actions.GetQuestSuccess(new Quest(action.payload.doc.id, action.payload.doc.data() as QuestData));

            return new actions.UnimplementedAction("");
        })
    );
}