import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedetailsviewComponent } from './invoicedetailsview.component';

describe('InvoicedetailsviewComponent', () => {
  let component: InvoicedetailsviewComponent;
  let fixture: ComponentFixture<InvoicedetailsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicedetailsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
