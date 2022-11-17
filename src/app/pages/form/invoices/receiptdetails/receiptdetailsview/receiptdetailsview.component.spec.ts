import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptdetailsviewComponent } from './receiptdetailsview.component';

describe('ReceiptdetailsviewComponent', () => {
  let component: ReceiptdetailsviewComponent;
  let fixture: ComponentFixture<ReceiptdetailsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptdetailsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptdetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
