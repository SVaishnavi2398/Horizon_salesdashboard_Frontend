import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpaymentschedulelistComponent } from './clientpaymentschedulelist.component';

describe('ClientpaymentschedulelistComponent', () => {
  let component: ClientpaymentschedulelistComponent;
  let fixture: ComponentFixture<ClientpaymentschedulelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientpaymentschedulelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientpaymentschedulelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
