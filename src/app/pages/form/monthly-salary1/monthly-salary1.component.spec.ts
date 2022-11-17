import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySalary1Component } from './monthly-salary1.component';

describe('MonthlySalary1Component', () => {
  let component: MonthlySalary1Component;
  let fixture: ComponentFixture<MonthlySalary1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySalary1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySalary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
