import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypackagelistComponent } from './salarypackagelist.component';

describe('SalarypackagelistComponent', () => {
  let component: SalarypackagelistComponent;
  let fixture: ComponentFixture<SalarypackagelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarypackagelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypackagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
