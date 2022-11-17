import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMultiDetailsListComponent } from './invoice-multi-details-list.component';

describe('InvoiceMultiDetailsListComponent', () => {
  let component: InvoiceMultiDetailsListComponent;
  let fixture: ComponentFixture<InvoiceMultiDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceMultiDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceMultiDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
