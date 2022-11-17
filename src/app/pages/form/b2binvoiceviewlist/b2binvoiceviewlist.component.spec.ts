import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2binvoiceviewlistComponent } from './b2binvoiceviewlist.component';

describe('B2binvoiceviewlistComponent', () => {
  let component: B2binvoiceviewlistComponent;
  let fixture: ComponentFixture<B2binvoiceviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2binvoiceviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2binvoiceviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
