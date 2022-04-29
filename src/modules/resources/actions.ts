import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";
import { createAction } from "typesafe-actions/dist/deprecated/create-action";
import { UrlResource, ImgResource } from "./types";

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE';
export const EDIT_RESOURCE = 'EDIT_RESOURCE';

let nextId = 1;

export const addResource = createAction(ADD_RESOURCE, action => (data: UrlResource | ImgResource) =>
    action({
        id: nextId ++,
        data
    })
);

export const editResource = createAction(EDIT_RESOURCE, action => (id: number, text: string) =>
    action({
        id,
        text
    })
);

export const removeResource = createStandardAction(REMOVE_RESOURCE)<number>();