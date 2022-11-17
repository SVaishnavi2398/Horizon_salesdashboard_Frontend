import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmonthlysalaryComponent } from './editmonthlysalary.component';

describe('EditmonthlysalaryComponent', () => {
  let component: EditmonthlysalaryComponent;
  let fixture: ComponentFixture<EditmonthlysalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmonthlysalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmonthlysalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
