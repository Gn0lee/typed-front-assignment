import { createStandardAction } from "typesafe-actions";

export const SELECT_RESOURCE = "SELECT_RESOURCE";
export const SELECT_IMG = "SELECT_IMG";

export const selectResource = createStandardAction(SELECT_RESOURCE)<number>();
export const selectImg = createStandardAction(SELECT_IMG)<string>();