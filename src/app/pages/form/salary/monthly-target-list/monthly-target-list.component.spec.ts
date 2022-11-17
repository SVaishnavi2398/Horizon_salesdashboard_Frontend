import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTargetListComponent } from './monthly-target-list.component';

describe('MonthlyTargetListComponent', () => {
  let component: MonthlyTargetListComponent;
  let fixture: ComponentFixture<MonthlyTargetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyTargetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTargetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
