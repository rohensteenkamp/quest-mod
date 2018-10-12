import { Planet } from "../models/planet";
import { Quest } from "../models/quest";
import { Explorer } from "../models/explorer";

export interface AppState {

    planetState: {
        planets: Planet[],
        loading: boolean
    }

    questState: {
        quests: Quest[],
        loading: boolean
    }

    explorerState: {
        explorers: Explorer[],
        loading: boolean
    }
}