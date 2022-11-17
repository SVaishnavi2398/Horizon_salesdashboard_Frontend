import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedetailslistComponent } from './invoicedetailslist.component';

describe('InvoicedetailslistComponent', () => {
  let component: InvoicedetailslistComponent;
  let fixture: ComponentFixture<InvoicedetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicedetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
