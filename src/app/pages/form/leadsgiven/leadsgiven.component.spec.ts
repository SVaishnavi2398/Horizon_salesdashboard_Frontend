import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsgivenComponent } from './leadsgiven.component';

describe('LeadsgivenComponent', () => {
  let component: LeadsgivenComponent;
  let fixture: ComponentFixture<LeadsgivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsgivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsgivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
