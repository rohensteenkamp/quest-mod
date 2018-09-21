import { Planet } from "../models/planet";
import { Quest } from "../models/quest";

export interface AppState {
    planetState: {
        planets: Planet[],
        loading: boolean
    }
    questState: {
        quests: Quest[],
        loading: boolean
    }
}