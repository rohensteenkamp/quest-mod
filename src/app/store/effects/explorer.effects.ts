import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/firestore";
import * as actions from "../actions";
import { switchMap, mergeMap, map } from "rxjs/operators";
import { GlobalService } from "src/app/services/global/global.service";
import { Explorer, ExplorerData } from "src/app/models/explorer";

@Injectable()
export class ExplorerEffects {

    constructor(private actions$: Actions, private db: AngularFirestore, private globalService: GlobalService) {}

    @Effect()
    GetExplorers$ = this.actions$.ofType(actions.GET_EXPLORERS).pipe(
        switchMap(action => {
            return this.db.collection("planets/" + this.globalService.selectedPlanet.key + "/explorers").stateChanges();
        }),
        mergeMap(actions => actions),
        map(action => {
            if(action.type === "added") {
                return new actions.GetExplorerSuccess(new Explorer(action.payload.doc.id, action.payload.doc.data() as ExplorerData));
            }
            return new actions.UnimplementedAction("");
        })
    )

}