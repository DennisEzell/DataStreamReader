import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from './Message';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from '../app.state';
import * as tweetActions from '../tweets/state/tweet.actions'
import { Tweet } from '../tweets/tweet'; 

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // Our socket connection
  private socket;

  constructor(private store: Store<State>) { } 

  connect(){
    this.socket = io('http://localhost:3000');
    this.socket.on('[Tweet] New Tweet Received', (data) => {
      let tweet = this.parseTweet(data.tweet);
      this.store.dispatch(new tweetActions.AddTweet(tweet));
      if(tweet.retweeted){
        this.store.dispatch(new tweetActions.AddRetweet(tweet));
      } else {
        this.store.dispatch(new tweetActions.AddOriginalTweet(tweet));
      }
    });    
  }

  sendMsg(msg: Message){
    this.socket.emit(msg.event, msg.data);
  }

  parseTweet(data): Tweet{
    let parsedTweet =  new Tweet()
    parsedTweet.id = data.id;
    parsedTweet.retweeted = data.retweeted_status ? true : false;
    parsedTweet.text = data.text;
    parsedTweet.user_screen_name = data.user.screen_name;
    parsedTweet.user_profile_img = data.user.profile_image_url;
    parsedTweet.user_id = data.user.id;
    parsedTweet.user_location = data.user.location;
    parsedTweet.user_description = data.user.description;
    data.entities.hashtags.forEach(function(element){ 
      parsedTweet.hashtags.push(element.text);
    });
    return parsedTweet;
  }
}
