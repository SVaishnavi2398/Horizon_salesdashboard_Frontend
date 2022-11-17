import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectallocationComponent } from './editprojectallocation.component';

describe('EditprojectallocationComponent', () => {
  let component: EditprojectallocationComponent;
  let fixture: ComponentFixture<EditprojectallocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprojectallocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
