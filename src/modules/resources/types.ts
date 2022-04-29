import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ResourceAction = ActionType<typeof actions>;

export const imgType = "IMG";
export const urlType = "URL";

export type UrlResource = {
    id : number;
    name : string;
    url : string;
    type : "URL";
}

export type ImgResource = {
    id : number;
    name: string | undefined;
    files: FileList | null;
    type : "IMG";
}

export type UrlInput = {
    name: string;
    url: string;
    type: "URL";
}

export type ImgInput = {
    name: string | undefined;
    files: FileList | null;
    type: "IMG";
}

export type ResourceState = (UrlResource | ImgResource)[];