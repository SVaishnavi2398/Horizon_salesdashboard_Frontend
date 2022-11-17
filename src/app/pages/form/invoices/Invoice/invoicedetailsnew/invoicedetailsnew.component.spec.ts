import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedetailsnewComponent } from './invoicedetailsnew.component';

describe('InvoicedetailsnewComponent', () => {
  let component: InvoicedetailsnewComponent;
  let fixture: ComponentFixture<InvoicedetailsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicedetailsnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedetailsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
