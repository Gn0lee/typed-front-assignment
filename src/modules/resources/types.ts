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
    name: string | undefined;
    files: FileList | null;
    type : string;
}

export type UrlInput = {
    name: string;
    url: string;
    type: string;
}

export type ImgInput = {
    name: string | undefined;
    files: FileList | null;
    type: string;
}

export type ResourceState = (UrlResource | ImgResource)[];