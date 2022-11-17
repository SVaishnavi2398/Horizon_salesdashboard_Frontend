import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMultiViewComponent } from './invoice-multi-view.component';

describe('InvoiceMultiViewComponent', () => {
  let component: InvoiceMultiViewComponent;
  let fixture: ComponentFixture<InvoiceMultiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceMultiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceMultiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
