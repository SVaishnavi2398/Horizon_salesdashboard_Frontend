import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdesignationsComponent } from './editdesignations.component';

describe('EditdesignationsComponent', () => {
  let component: EditdesignationsComponent;
  let fixture: ComponentFixture<EditdesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdesignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
