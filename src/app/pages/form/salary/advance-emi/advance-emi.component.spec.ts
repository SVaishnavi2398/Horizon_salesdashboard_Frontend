import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEmiComponent } from './advance-emi.component';

describe('AdvanceEmiComponent', () => {
  let component: AdvanceEmiComponent;
  let fixture: ComponentFixture<AdvanceEmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceEmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceEmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
