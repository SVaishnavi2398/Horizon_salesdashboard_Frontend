import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientdetailsComponent } from './editclientdetails.component';

describe('EditclientdetailsComponent', () => {
  let component: EditclientdetailsComponent;
  let fixture: ComponentFixture<EditclientdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditclientdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditclientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
