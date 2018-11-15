import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './WebSocket/message.service';
import { WebsocketService } from './WebSocket/websocket.service';
import { NavComponent } from './nav/nav.component';
import { TweetListComponent } from './tweets/tweet-list/tweet-list.component';
import { TweetContainerComponent } from './tweets/tweet-container/tweet-container.component';
import { TweetViewComponent } from './tweets/tweet-view/tweet-view.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { tweetReducer } from './tweets/state/tweet.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './search/state/search.effects'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TweetListComponent,
    TweetContainerComponent,
    TweetViewComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    StoreModule.forRoot({tweet: tweetReducer}),
    EffectsModule.forRoot([SearchEffects])
  ],
  providers: [
    MessageService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
