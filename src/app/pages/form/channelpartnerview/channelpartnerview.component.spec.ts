import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelpartnerviewComponent } from './channelpartnerview.component';

describe('ChannelpartnerviewComponent', () => {
  let component: ChannelpartnerviewComponent;
  let fixture: ComponentFixture<ChannelpartnerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelpartnerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelpartnerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
