import { Action } from "@ngrx/store";
import { Quest } from "../../models/quest";

export const GET_QUESTS = "[quest] GET_QUESTS";
export const GET_QUEST_SUCCESS = "[quest] GET_QUEST_SUCCESS";
export const REMOVE_QUEST_SUCCESS = "[quest] REMOVE_PLANET_SUCCESS";
export const UNIMPLEMENTED_ACTION = "[quest] UNIMPLEMENTED_ACTION";


export class GetQuests implements Action {
    type = GET_QUESTS;
    constructor() {}
}

export class GetQuestSuccess implements Action {
    type = GET_QUEST_SUCCESS;
    constructor(public payload: Quest) {}
}

export class RemoveQuestSuccess implements Action {
    type = REMOVE_QUEST_SUCCESS;
    constructor(public payload: string) {}
}

export class UnimplementedAction implements Action {
    type = UNIMPLEMENTED_ACTION;
    constructor(public payload: string) { }
}

export type QuestActions = 
    | GetQuests
    | GetQuestSuccess
    | RemoveQuestSuccess
    | UnimplementedAction