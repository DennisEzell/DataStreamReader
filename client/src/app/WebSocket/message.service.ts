import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Message } from './Message';

@Injectable()
export class MessageService {

  /**
   * Message Service ctor - will use the RxObservable object from the 
   *    WebsocketService.connect() as the basis for its messages property
   * @param wsService 
   */
  constructor(private wsService: WebsocketService) {
    wsService.connect();      
  }

  /**
   * Client function for emitting a message back to the server
   * @param msg - Message sent to the server
   */
  sendMsg(msg: Message){
    this.wsService.sendMsg(msg);
  }
}
