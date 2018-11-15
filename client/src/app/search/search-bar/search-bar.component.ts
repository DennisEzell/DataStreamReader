import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../app.state'
import * as searchActions from '../state/search.actions'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  getTweets(filter: string): void{
    this.store.dispatch(new searchActions.StartStream(filter));
    console.log(filter);
  }
}
