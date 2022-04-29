import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type SelectorState = {
    id: number;
    img: string;
};

export type SelectorAction = ActionType<typeof actions>
