import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsgivenlistComponent } from './leadsgivenlist.component';

describe('LeadsgivenlistComponent', () => {
  let component: LeadsgivenlistComponent;
  let fixture: ComponentFixture<LeadsgivenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsgivenlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsgivenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
