import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypackageComponent } from './salarypackage.component';

describe('SalarypackageComponent', () => {
  let component: SalarypackageComponent;
  let fixture: ComponentFixture<SalarypackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarypackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
