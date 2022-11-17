import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectallocationsComponent } from './projectallocations.component';

describe('ProjectallocationsComponent', () => {
  let component: ProjectallocationsComponent;
  let fixture: ComponentFixture<ProjectallocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectallocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectallocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
