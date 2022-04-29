import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";
import { createReducer, ActionType } from "typesafe-actions";

const SELECT_RESOURCE = "SELECT_RESOURCE";

export const select = createStandardAction(SELECT_RESOURCE)<number>();

type SelectorState = {
    id: number;
};

type SelectorAction = ActionType< typeof select>

const initialState: SelectorState = {
    id: 0
};

const selector = createReducer<SelectorState,SelectorAction>(initialState,{
    [SELECT_RESOURCE]: (state, { payload: id }) => ({id})
})

export default selector;