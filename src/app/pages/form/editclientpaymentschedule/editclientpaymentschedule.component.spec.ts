import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientpaymentscheduleComponent } from './editclientpaymentschedule.component';

describe('EditclientpaymentscheduleComponent', () => {
  let component: EditclientpaymentscheduleComponent;
  let fixture: ComponentFixture<EditclientpaymentscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditclientpaymentscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditclientpaymentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
