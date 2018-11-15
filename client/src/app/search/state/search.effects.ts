import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MessageService } from "src/app/WebSocket/message.service";
import * as searchActions from "./search.actions";
import { mergeMap, map } from 'rxjs/operators';
import * as tweetActions from '../../tweets/state/tweet.actions';

@Injectable()
export class SearchEffects {

    /**
     * Effect ctor
     * @param actions$ - The stream of actions being dispatched in our application
     * @param msgService - The injected message service
     */
    constructor(private actions$: Actions, private msgService: MessageService ) {}    

    //TODO: How do we get action payload data into this call?
    /**
     * Create an observable that will:
     *  (1) Listen for the StartStream event
     *  (2) When we hear a 'StartStream' event, 
     *      map each occurance over to a call to 
     *      the message service
     *  (3) I do not need to issue another action, only start the stream 
     *      since the websocket will be what emits new tweets from the server
     */
    @Effect()
    startStream$ = this.actions$.pipe(
        ofType(searchActions.SearchActionTypes.StartStream),
        map((action: searchActions.StartStream) => {
            this.msgService.sendMsg({event: searchActions.SearchActionTypes.StartStream, data: {filter: action.payload}}),[]
            return new tweetActions.ClearTweets();                          
        })
    );
}