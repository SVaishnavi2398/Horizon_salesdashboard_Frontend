import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalarypackageComponent } from './editsalarypackage.component';

describe('EditsalarypackageComponent', () => {
  let component: EditsalarypackageComponent;
  let fixture: ComponentFixture<EditsalarypackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalarypackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalarypackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
