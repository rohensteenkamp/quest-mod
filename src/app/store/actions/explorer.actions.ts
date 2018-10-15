import { Action } from "@ngrx/store";
import { Explorer } from "src/app/models/explorer";

export const GET_EXPLORERS = '[explorer] GET_EXPLORERS';
export const GET_EXPLORER_SUCCESS = '[explorer] GET_EXPLORER_SUCCESS';

export class GetExplorers implements Action {
    type = GET_EXPLORERS;
    constructor() {}
}

export class GetExplorerSuccess implements Action {
    type = GET_EXPLORER_SUCCESS;
    constructor(public payload: Explorer) {}
}

export type ExplorerActions =
    | GetExplorers
    | GetExplorerSuccess