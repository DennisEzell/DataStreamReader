import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { tweetReducer } from '../tweets/state/tweet.reducer'

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      StoreModule.forFeature('tweets', tweetReducer)
    ]
  })
  export class WebsocketModule { }