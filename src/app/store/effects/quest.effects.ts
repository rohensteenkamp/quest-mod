import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Actions, Effect } from "@ngrx/effects";
import * as actions from '../actions'
import { switchMap, mergeMap, map } from "rxjs/operators";
import { GlobalService } from "../../services/global/global.service";
import { Quest, QuestData } from "../../models/quest";

@Injectable()
export class QuestEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private globalService: GlobalService) {}

    @Effect()
    GetPlanets$ = this.actions$.ofType(actions.GET_QUESTS).pipe(
        switchMap(action => {
            return this.db.collection("planets/" + this.globalService.selectedPlanet.key + "/quests").stateChanges();
        }),
        mergeMap(actions => actions),
        map(action => {
            console.log(action);

            if(action.type === "added") {
                return new actions.GetQuestSuccess(new Quest(action.payload.doc.id, action.payload.doc.data() as QuestData));
            }
        })
    )
}