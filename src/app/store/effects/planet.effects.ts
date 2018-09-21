import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import * as actions from '../actions';
import { switchMap, mergeMap, map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import { Planet, PlanetData } from "../../models/planet";

@Injectable()
export class PlanetEffects {
    constructor(private actions$: Actions, private db: AngularFirestore){}

    @Effect()
    GetPlanets$ = this.actions$.ofType(actions.GET_PLANETS).pipe(
        switchMap(action => {
            return this.db.collection("planets").stateChanges()
        }),
        mergeMap(actions => actions),
        map(action => {
            console.log(action);
            
            if(action.type === "added")
                return new actions.GetPlanetSuccess(new Planet(action.payload.doc.id, action.payload.doc.data() as PlanetData));
            else if ( action.type === "removed" )
                return new actions.RemovePlanetSuccess(action.payload.doc.id);
        })

    );
}