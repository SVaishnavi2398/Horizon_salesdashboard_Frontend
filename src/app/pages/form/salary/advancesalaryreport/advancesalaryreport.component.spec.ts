import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancesalaryreportComponent } from './advancesalaryreport.component';

describe('AdvancesalaryreportComponent', () => {
  let component: AdvancesalaryreportComponent;
  let fixture: ComponentFixture<AdvancesalaryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancesalaryreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancesalaryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
