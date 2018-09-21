import { Action } from "@ngrx/store";
import { Quest } from "../../models/quest";

export const GET_QUESTS = "[quest] GET_QUESTS";
export const GET_QUEST_SUCCESS = "[quest] GET_QUEST_SUCCESS"

export class GetQuests implements Action {
    type = GET_QUESTS;
    constructor() {}
}

export class GetQuestSuccess implements Action {
    type = GET_QUEST_SUCCESS;
    constructor(public payload: Quest) {}
}

export type QuestActions = 
    | GetQuests
    | GetQuestSuccess;