import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearincentivedetailsComponent } from './yearincentivedetails.component';

describe('YearincentivedetailsComponent', () => {
  let component: YearincentivedetailsComponent;
  let fixture: ComponentFixture<YearincentivedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearincentivedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearincentivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
