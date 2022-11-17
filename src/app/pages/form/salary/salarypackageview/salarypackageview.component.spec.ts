import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypackageviewComponent } from './salarypackageview.component';

describe('SalarypackageviewComponent', () => {
  let component: SalarypackageviewComponent;
  let fixture: ComponentFixture<SalarypackageviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarypackageviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypackageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
