import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2binvoicedetailsComponent } from './b2binvoicedetails.component';

describe('B2binvoicedetailsComponent', () => {
  let component: B2binvoicedetailsComponent;
  let fixture: ComponentFixture<B2binvoicedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2binvoicedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2binvoicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
