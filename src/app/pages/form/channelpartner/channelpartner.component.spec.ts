import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelpartnerComponent } from './channelpartner.component';

describe('ChannelpartnerComponent', () => {
  let component: ChannelpartnerComponent;
  let fixture: ComponentFixture<ChannelpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
