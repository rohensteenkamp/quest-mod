import * as actions from './../actions';

export function questReducer(state = intitialQuestState, action: actions.QuestActions) {
    const newState = {...state};
    switch(action.type) {
        case actions.GET_QUEST_SUCCESS:
            const getQuestSuccessAction = action as actions.GetQuestSuccess;
            newState.quests = [...newState.quests, getQuestSuccessAction.payload];
            return newState;
        default:
            return state;    
    }

}

export const intitialQuestState = {
    quests: [],
    loading: false
}