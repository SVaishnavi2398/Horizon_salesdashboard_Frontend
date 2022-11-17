import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdealdetailsComponent } from './editdealdetails.component';

describe('EditdealdetailsComponent', () => {
  let component: EditdealdetailsComponent;
  let fixture: ComponentFixture<EditdealdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdealdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdealdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
