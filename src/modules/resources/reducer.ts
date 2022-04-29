import { ResourceAction, ResourceState } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_RESOURCE, REMOVE_RESOURCE, EDIT_RESOURCE } from "./actions";

const initialState: ResourceState = [];

const resource = createReducer<ResourceState,ResourceAction>(initialState,{
    [ADD_RESOURCE]: (state, action) => 
        state.concat({
            ...action.payload,
        }),
    [REMOVE_RESOURCE]: (state, { payload : id }) =>
        state.filter(item => item.id !== id),
    [EDIT_RESOURCE]: (state, aciton) =>
        state.map(item => (item.id === aciton.payload.id ? {...item, name: aciton.payload.text} : item))
});

export default resource;