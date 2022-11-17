import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderslistComponent } from './teamleaderslist.component';

describe('TeamleaderslistComponent', () => {
  let component: TeamleaderslistComponent;
  let fixture: ComponentFixture<TeamleaderslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamleaderslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamleaderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
