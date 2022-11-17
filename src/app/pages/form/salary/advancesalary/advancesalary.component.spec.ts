import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancesalaryComponent } from './advancesalary.component';

describe('AdvancesalaryComponent', () => {
  let component: AdvancesalaryComponent;
  let fixture: ComponentFixture<AdvancesalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancesalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
