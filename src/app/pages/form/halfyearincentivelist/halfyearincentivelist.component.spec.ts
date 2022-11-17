import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfyearincentivelistComponent } from './halfyearincentivelist.component';

describe('HalfyearincentivelistComponent', () => {
  let component: HalfyearincentivelistComponent;
  let fixture: ComponentFixture<HalfyearincentivelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfyearincentivelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfyearincentivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
