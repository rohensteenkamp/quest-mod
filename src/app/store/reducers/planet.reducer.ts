import * as actions from './../actions';
import { Planet } from '../../models/planet';

export function planetReducer(state = initialPlanetState, action: actions.PlanetActions) {
    const newState = { ...state };
    switch (action.type) {
        case actions.GET_PLANETS:
            newState.planets = [];
            newState.loading = false;
            return newState;
        case actions.GET_PLANET_SUCCESS:
            const getPlanetSuccessAction = action as actions.GetPlanetSuccess;
            newState.planets = [...newState.planets, getPlanetSuccessAction.payload];
            return newState;

        case actions.REMOVE_PLANET_SUCCESS:
            const removePlanetSuccessAction = action as actions.RemovePlanetSuccess;
            newState.planets = [...newState.planets.splice(newState.planets.indexOf(newState.planets.find((planet: Planet) => planet.key == removePlanetSuccessAction.payload)), 1)]
        default:
            return state;
    }
}

export const initialPlanetState = {
    planets: [],
    loading: false
}