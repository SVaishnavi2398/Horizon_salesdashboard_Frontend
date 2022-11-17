import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypackageDetailsComponent } from './salarypackage-details.component';

describe('SalarypackageDetailsComponent', () => {
  let component: SalarypackageDetailsComponent;
  let fixture: ComponentFixture<SalarypackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarypackageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
