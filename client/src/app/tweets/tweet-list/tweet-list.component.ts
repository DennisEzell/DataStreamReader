import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';

/* NgRX */
import { Store, select } from '@ngrx/store';
import { State } from '../../app.state'
import * as tweetReducer from '../state/tweet.reducer';
import * as tweetActions from '../state/tweet.actions';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {
  tweets: Tweet[];
  retweets: Tweet[];
  originalTweets: Tweet[];
  currentFilter: tweetActions.TweetFilterTypes;  

  constructor(private store: Store<State>) { }

  ngOnInit() {
    //Build tweet store subscriptions
    this.store.pipe(select(tweetReducer.getTweets)).subscribe(
      tweets => this.tweets = tweets
    );

    this.store.pipe(select(tweetReducer.getRetweets)).subscribe(
      retweets => this.retweets = retweets
    );

    this.store.pipe(select(tweetReducer.getOriginalTweets)).subscribe(
      originalTweets => this.originalTweets = originalTweets
    );

    this.store.pipe(select(tweetReducer.getCurrentFilter)).subscribe(
      currentFilter => this.currentFilter = currentFilter
    );
  }

  viewTweet(id: number){
    let selectedTweet = this.tweets.find((tweet: Tweet) => tweet.id == id);
    this.store.dispatch(new tweetActions.TweetSelected(selectedTweet));
  }

  filterChanged(filter: string){
    let newFilter = tweetActions.TweetFilterTypes[filter];
    this.store.dispatch(new tweetActions.TweetFilterSelected(newFilter));
  }
}
