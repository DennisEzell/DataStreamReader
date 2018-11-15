import { Action } from "@ngrx/store";

/**
 * Enum representing the set of search actions
 */
export enum SearchActionTypes {
    StartStream = '[Search] Start Twitter Stream',
    StreamStarted = '[Search] Twitter Stream Started',
}

/**
 * Action creators for Search actions
 */
export class StartStream implements Action{
    readonly type = SearchActionTypes.StartStream;
    constructor(public payload: string){}
}

export class StreamStarted implements Action{
    readonly type = SearchActionTypes.StreamStarted;
}

/**
 * Create a Union type for all search actions 
 */
export type SearchActions = StartStream
    | StreamStarted;