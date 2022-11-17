import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreceiptdetailsComponent } from './editreceiptdetails.component';

describe('EditreceiptdetailsComponent', () => {
  let component: EditreceiptdetailsComponent;
  let fixture: ComponentFixture<EditreceiptdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreceiptdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreceiptdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
