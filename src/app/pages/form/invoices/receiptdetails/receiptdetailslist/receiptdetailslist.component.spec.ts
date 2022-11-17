import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptdetailslistComponent } from './receiptdetailslist.component';

describe('ReceiptdetailslistComponent', () => {
  let component: ReceiptdetailslistComponent;
  let fixture: ComponentFixture<ReceiptdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptdetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
