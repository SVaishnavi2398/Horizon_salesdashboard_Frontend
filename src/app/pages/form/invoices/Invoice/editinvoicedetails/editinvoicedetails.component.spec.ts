import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinvoicedetailsComponent } from './editinvoicedetails.component';

describe('EditinvoicedetailsComponent', () => {
  let component: EditinvoicedetailsComponent;
  let fixture: ComponentFixture<EditinvoicedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinvoicedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinvoicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
