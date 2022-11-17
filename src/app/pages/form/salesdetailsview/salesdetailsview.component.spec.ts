import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdetailsviewComponent } from './salesdetailsview.component';

describe('SalesdetailsviewComponent', () => {
  let component: SalesdetailsviewComponent;
  let fixture: ComponentFixture<SalesdetailsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdetailsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
