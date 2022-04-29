import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ResourceAction = ActionType<typeof actions>;

export type UrlResource = {
    id : number;
    name : string;
    url : string;
    type : string;
}

export type ImgResource = {
    id : number;
    name : string;
    files : [];
    type : string;
}

export type ResourceState = (UrlResource | ImgResource)[];