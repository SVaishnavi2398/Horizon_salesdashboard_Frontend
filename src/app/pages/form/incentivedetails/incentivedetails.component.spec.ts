import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivedetailsComponent } from './incentivedetails.component';

describe('IncentivedetailsComponent', () => {
  let component: IncentivedetailsComponent;
  let fixture: ComponentFixture<IncentivedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncentivedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
