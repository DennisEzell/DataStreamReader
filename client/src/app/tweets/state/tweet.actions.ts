import { Action } from "@ngrx/store";
import { Tweet } from "../tweet";

/**
 * Enum representing the set of tweet actions
 */
export enum TweetActionTypes {
    NewTweet = '[Tweet] New Tweet Received',
    AddTweet = '[Tweet] Add New Tweet',
    AddRetweet = '[Tweet] Add New Retweet',
    AddOriginalTweet = '[Tweet] Add New Original Tweet',
    TweetSelected = '[Tweet] Tweet Selected',
    TweetFilterSelected = '[Tweet] Tweet Filter Selected',
    ClearTweets = '[Tweet] Clear Tweets'
}

export enum TweetFilterTypes {
    ALL = 'Display All Tweets',
    ORIGINAL = 'Display Only Original Tweets',
    RETWEET = 'Display Only Retweets'
}

/** Action creators for Tweet actions **/

 export class NewTweet implements Action {
     readonly type = TweetActionTypes.NewTweet;
     constructor(public payload: Tweet) {}
 };

export class AddTweet implements Action {
    readonly type = TweetActionTypes.AddTweet;
    constructor(public payload: Tweet) {}
};

export class AddRetweet implements Action {
    readonly type = TweetActionTypes.AddRetweet;
    constructor(public payload: Tweet) {}
};

export class AddOriginalTweet implements Action {
    readonly type = TweetActionTypes.AddOriginalTweet;
    constructor(public payload: Tweet) {}
};

export class TweetSelected implements Action {
    readonly type = TweetActionTypes.TweetSelected;
    constructor(public payload: Tweet) {}
};

export class TweetFilterSelected implements Action {
    readonly type = TweetActionTypes.TweetFilterSelected;
    constructor(public payload: TweetFilterTypes){}
};

export class ClearTweets implements Action {
    readonly type =TweetActionTypes.ClearTweets;
    constructor() {};
}

 /**
  * Create a Union type for all tweet actions
  */
 export type TweetActions = NewTweet
    | AddTweet
    | AddRetweet
    | AddOriginalTweet
    | TweetSelected
    | TweetFilterSelected
    | ClearTweets;