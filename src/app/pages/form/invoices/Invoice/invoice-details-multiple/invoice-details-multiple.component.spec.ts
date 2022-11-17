import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsMultipleComponent } from './invoice-details-multiple.component';

describe('InvoiceDetailsMultipleComponent', () => {
  let component: InvoiceDetailsMultipleComponent;
  let fixture: ComponentFixture<InvoiceDetailsMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
