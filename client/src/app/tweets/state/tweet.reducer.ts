import { Tweet } from '../tweet';
import { TweetActionTypes, TweetActions, TweetFilterTypes } from './tweet.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/**
 * Define the TweetState for the Tweet feature
 */
export interface TweetState{
    tweets: Tweet[],
    originalTweets: Tweet[],
    retweets: Tweet[],
    selectedTweet: Tweet,
    currentfilter: TweetFilterTypes
};

/**
 * Define the intitial state for the Tweet feature
 */
const initialState: TweetState = {
    tweets: [],
    originalTweets: [],
    retweets: [],
    selectedTweet: new Tweet(),
    currentfilter: TweetFilterTypes.ALL
}

//Selector functions
const getTweetFeature = createFeatureSelector<TweetState>('tweet');

export const getTweets = createSelector(
    getTweetFeature,
    state => state.tweets
);

export const getRetweets = createSelector(
    getTweetFeature,
    state => state.retweets
);

export const getOriginalTweets = createSelector(
    getTweetFeature,
    state => state.originalTweets
);

export const getSelectedTweet = createSelector(
    getTweetFeature,
    state => state.selectedTweet
);

export const getCurrentFilter = createSelector(
    getTweetFeature,
    state => state.currentfilter
);

/**
 * Define the reducer for the Tweet feature
 * @param state - Current state
 * @param action - Dispatched action
 */
export function tweetReducer(state = initialState, action: TweetActions){
    switch(action.type) {
        case TweetActionTypes.AddTweet:
        return{
            ...state,
            tweets: [...state.tweets, action.payload]
        };
        
        case TweetActionTypes.AddRetweet:
        return {
            ...state,
            retweets: [...state.retweets, action.payload]
        };
        
        case TweetActionTypes.AddOriginalTweet:
        return {
            ...state,
            originalTweets: [...state.originalTweets, action.payload]
        };

        case TweetActionTypes.TweetSelected:
        return {
            ...state,
            selectedTweet: {...action.payload}
        };

        case TweetActionTypes.TweetFilterSelected:
        return {
            ...state,
            currentfilter: action.payload
        };

        case TweetActionTypes.ClearTweets:
        return{
            ...state,
            tweets: [],
            originalTweets: [],
            retweets: [],
            selectedTweet: new Tweet(),
            currentfilter: TweetFilterTypes.ALL
        }

        default:
        return state;
    }
}