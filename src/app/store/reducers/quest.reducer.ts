import * as actions from './../actions';
import { Quest } from '../../models/quest';

export function questReducer(state = intitialQuestState, action: actions.QuestActions) {
    const newState = {...state};
    switch(action.type) {   
        case actions.GET_QUEST_SUCCESS:
            const getQuestSuccessAction = action as actions.GetQuestSuccess;
            newState.quests = [...newState.quests, getQuestSuccessAction.payload];
            return newState;
        case actions.REMOVE_QUEST_SUCCESS:
            const removeQuestSuccessAction = action as actions.RemoveQuestSuccess;
            newState.quests = [...newState.quests.splice(newState.quests.indexOf(newState.quests.find((quest: Quest) => quest.key === removeQuestSuccessAction.payload)), 1)]    
        default:
            return state;    
    }

}

export const intitialQuestState = {
    quests: [],
    loading: false
}