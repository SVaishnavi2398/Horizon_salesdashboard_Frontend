import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailslistviewComponent } from './teamdetailslistview.component';

describe('TeamdetailslistviewComponent', () => {
  let component: TeamdetailslistviewComponent;
  let fixture: ComponentFixture<TeamdetailslistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdetailslistviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailslistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
