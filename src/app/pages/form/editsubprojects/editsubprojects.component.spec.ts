import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubprojectsComponent } from './editsubprojects.component';

describe('EditsubprojectsComponent', () => {
  let component: EditsubprojectsComponent;
  let fixture: ComponentFixture<EditsubprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
