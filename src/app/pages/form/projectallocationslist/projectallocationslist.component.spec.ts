import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectallocationslistComponent } from './projectallocationslist.component';

describe('ProjectallocationslistComponent', () => {
  let component: ProjectallocationslistComponent;
  let fixture: ComponentFixture<ProjectallocationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectallocationslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectallocationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
