import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyincentivedetailsComponent } from './quarterlyincentivedetails.component';

describe('QuarterlyincentivedetailsComponent', () => {
  let component: QuarterlyincentivedetailsComponent;
  let fixture: ComponentFixture<QuarterlyincentivedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterlyincentivedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyincentivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
