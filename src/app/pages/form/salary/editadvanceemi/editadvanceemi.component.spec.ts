import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadvanceemiComponent } from './editadvanceemi.component';

describe('EditadvanceemiComponent', () => {
  let component: EditadvanceemiComponent;
  let fixture: ComponentFixture<EditadvanceemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadvanceemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadvanceemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
