import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailsMultipleComponent } from './edit-details-multiple.component';

describe('EditDetailsMultipleComponent', () => {
  let component: EditDetailsMultipleComponent;
  let fixture: ComponentFixture<EditDetailsMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailsMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailsMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
