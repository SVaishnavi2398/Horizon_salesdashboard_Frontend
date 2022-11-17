import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelpartnerslistComponent } from './channelpartnerslist.component';

describe('ChannelpartnerslistComponent', () => {
  let component: ChannelpartnerslistComponent;
  let fixture: ComponentFixture<ChannelpartnerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelpartnerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelpartnerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
