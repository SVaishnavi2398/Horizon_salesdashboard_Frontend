import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadvancesalaryComponent } from './editadvancesalary.component';

describe('EditadvancesalaryComponent', () => {
  let component: EditadvancesalaryComponent;
  let fixture: ComponentFixture<EditadvancesalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadvancesalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadvancesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
