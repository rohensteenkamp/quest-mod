import { Planet } from "../models/planet";

export interface AppState {
    planetState: {
        planets: Planet[],
        loading: boolean,

    }
}