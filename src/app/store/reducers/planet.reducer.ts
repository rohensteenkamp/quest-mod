import * as actions from './../actions';
import { Planet } from '../../models/planet';
import { RemovePlanetSuccess } from './../actions';

export function planetReducer(state = initialState, action: actions.PlanetActions) {
    const newState = { ...state };
    switch (action.type) {

        case actions.GET_PLANET_SUCCESS:
            const getPlanetSuccessAction = action as actions.GetPlanetSuccess;
            newState.planets = [...newState.planets, getPlanetSuccessAction.payload];
            return newState;

        case actions.REMOVE_PLANET_SUCCESS: RemovePlanetSuccess
            const removePlanetSuccessAction = action as actions.RemovePlanetSuccess;
            newState.planets = [...newState.planets.splice(newState.planets.indexOf(newState.planets.find((planet: Planet) => planet.key == removePlanetSuccessAction.payload)), 1)]
        default:
            return state;
    }
}

export const initialState = {
    planets: [],
    loading: false
}