import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailslistComponent } from './teamdetailslist.component';

describe('TeamdetailslistComponent', () => {
  let component: TeamdetailslistComponent;
  let fixture: ComponentFixture<TeamdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
