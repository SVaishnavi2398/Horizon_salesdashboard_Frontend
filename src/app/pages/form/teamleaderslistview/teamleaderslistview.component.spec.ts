import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderslistviewComponent } from './teamleaderslistview.component';

describe('TeamleaderslistviewComponent', () => {
  let component: TeamleaderslistviewComponent;
  let fixture: ComponentFixture<TeamleaderslistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamleaderslistviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamleaderslistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
