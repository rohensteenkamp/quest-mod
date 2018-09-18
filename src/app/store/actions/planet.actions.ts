import {Action} from '@ngrx/store';
import { Planet } from '../../models/planet';

export const GET_PLANETS = '[planet] GET_PLANETS';
export const GET_PLANET_SUCCESS = '[planet] GET_PLANET_SUCCESS';

export class GetPlanets implements Action {
    type = GET_PLANETS;
    constructor(){}
}

export class GetPlanetSuccess implements Action {
    type = GET_PLANET_SUCCESS;
    constructor(public payload: Planet){}
}

export type PlanetActions = 
| GetPlanets
| GetPlanetSuccess;