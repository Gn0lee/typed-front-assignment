import { SelectorAction, SelectorState } from "./types";
import { createReducer } from "typesafe-actions";
import { SELECT_IMG, SELECT_RESOURCE } from "./actions";

const initialState: SelectorState = {
    id: 0,
    img: ""
};

const select = createReducer<SelectorState,SelectorAction>(initialState,{
    [SELECT_RESOURCE]: (state, action) => ({...state, id: action.payload}),
    [SELECT_IMG]: (state, action) => ({...state, img: action.payload}) 
});

export default select;