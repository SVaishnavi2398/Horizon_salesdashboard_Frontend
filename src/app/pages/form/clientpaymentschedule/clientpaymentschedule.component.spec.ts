import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpaymentscheduleComponent } from './clientpaymentschedule.component';

describe('ClientpaymentscheduleComponent', () => {
  let component: ClientpaymentscheduleComponent;
  let fixture: ComponentFixture<ClientpaymentscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientpaymentscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientpaymentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
