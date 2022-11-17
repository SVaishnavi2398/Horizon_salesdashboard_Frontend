import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySalarylistView1Component } from './monthly-salarylist-view1.component';

describe('MonthlySalarylistView1Component', () => {
  let component: MonthlySalarylistView1Component;
  let fixture: ComponentFixture<MonthlySalarylistView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySalarylistView1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySalarylistView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
