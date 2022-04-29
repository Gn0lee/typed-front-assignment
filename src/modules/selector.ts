import { createReducer, ActionType, createStandardAction } from "typesafe-actions";

const SELECT_RESOURCE = "SELECT_RESOURCE";

export const selectResource = createStandardAction(SELECT_RESOURCE)<number>();

type SelectorState = {
    id: number;
};

type SelectorAction = ActionType< typeof selectResource>

const initialState: SelectorState = {
    id: 0
};

const selector = createReducer<SelectorState,SelectorAction>(initialState,{
    [SELECT_RESOURCE]: (state, { payload: id }) => ({id})
})

export default selector;