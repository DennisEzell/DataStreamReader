import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { State } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import * as tweetReducer from '../state/tweet.reducer'

@Component({
  selector: 'app-tweet-view',
  templateUrl: './tweet-view.component.html',
  styleUrls: ['./tweet-view.component.scss']
})
export class TweetViewComponent implements OnInit {

  selectedTweet: Tweet;
  tweets: Tweet[];
  retweets: Tweet[];
  originalTweets: Tweet[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(select(tweetReducer.getSelectedTweet)).subscribe(
      currentTweet => this.selectedTweet = currentTweet
    );

    this.store.pipe(select(tweetReducer.getTweets)).subscribe(
      tweets => this.tweets = tweets
    );

    this.store.pipe(select(tweetReducer.getRetweets)).subscribe(
      retweets => this.retweets = retweets
    );

    this.store.pipe(select(tweetReducer.getOriginalTweets)).subscribe(
      originalTweets => this.originalTweets = originalTweets
    );
  }

}
