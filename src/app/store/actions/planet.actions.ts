import { Action } from '@ngrx/store';
import { Planet } from '../../models/planet';

export const GET_PLANETS = '[planet] GET_PLANETS';
export const GET_PLANET_SUCCESS = '[planet] GET_PLANET_SUCCESS';
export const UNIMPLEMENTED_ACTION = '[planet] UNIMPLEMENTED_ACTION';
export const REMOVE_PLANET_SUCCESS = '[planet] REMOVE_PLANET_SUCCESS';

export class GetPlanets implements Action {
    type = GET_PLANETS;
    constructor() { }
}

export class GetPlanetSuccess implements Action {
    type = GET_PLANET_SUCCESS;
    constructor(public payload: Planet) { }
}

export class RemovePlanetSuccess implements Action {
    type = REMOVE_PLANET_SUCCESS;
    constructor (public payload: string) {}
}

export class UnimplementedAction implements Action {
    type = UNIMPLEMENTED_ACTION;
    constructor(public payload: string) { }
}

export type PlanetActions =
    | GetPlanets
    | GetPlanetSuccess
    | UnimplementedAction
    | RemovePlanetSuccess