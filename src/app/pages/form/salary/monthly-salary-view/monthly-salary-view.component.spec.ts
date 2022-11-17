import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySalaryViewComponent } from './monthly-salary-view.component';

describe('MonthlySalaryViewComponent', () => {
  let component: MonthlySalaryViewComponent;
  let fixture: ComponentFixture<MonthlySalaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySalaryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySalaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
