import { Component, OnInit } from '@angular/core';
import { MessageService } from './WebSocket/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tweets: [];

  /**
   * App Component ctor
   * @param msg 
   */
  constructor() {}

  /**
   * Angular lifecyle method that fires on component initialization
   */
  ngOnInit(){
    /* this.msg.sendMsg({event:'Start-Stream', data:{}});  */
/*     this.msg.messages.subscribe(msg => {
      this.tweets = msg.data;
      console.log('In ngOnINit message subscribe');
      console.log(msg); */
/*       this.rows.push({
        name: msg.tweet.user.screen_name,
        location: msg.tweet.user.location,
        tweet: msg.tweet.text
      });
      this.rows = [...this.rows] ; */
    /* });  */
  }

  /**
   * Method to start the twitter stream by invoking
   * the socket.io server
   */
  /* streamTweets(){
    this.msg.sendMsg({event:'Start-Stream', data:{filter: 'brees'}});     
    /* this.msg.sendMsg({event:'Set-Filter', data:{filter: 'WhoDat'}});    */     
 

  /**
   * Method to terminate the current twitter stream
   * by invoking the socket.io server
   */
/*   stopStream(){
    this.msg.sendMsg({event: 'Stop-Stream', data: {}});
  } */
}
