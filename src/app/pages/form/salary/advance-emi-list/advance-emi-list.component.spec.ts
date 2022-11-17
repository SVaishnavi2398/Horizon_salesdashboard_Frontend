import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEmiListComponent } from './advance-emi-list.component';

describe('AdvanceEmiListComponent', () => {
  let component: AdvanceEmiListComponent;
  let fixture: ComponentFixture<AdvanceEmiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceEmiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceEmiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
