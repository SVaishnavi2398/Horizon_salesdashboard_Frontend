import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancesalaryviewComponent } from './advancesalaryview.component';

describe('AdvancesalaryviewComponent', () => {
  let component: AdvancesalaryviewComponent;
  let fixture: ComponentFixture<AdvancesalaryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancesalaryviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancesalaryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
