import { combineReducers } from "redux";
import resource from "./resources";
import selector from "./selectors";

const rootReducer = combineReducers({
    resource,
    selector
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;