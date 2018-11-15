import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetContainerComponent } from './tweet-container.component';

describe('TweetContainerComponent', () => {
  let component: TweetContainerComponent;
  let fixture: ComponentFixture<TweetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
