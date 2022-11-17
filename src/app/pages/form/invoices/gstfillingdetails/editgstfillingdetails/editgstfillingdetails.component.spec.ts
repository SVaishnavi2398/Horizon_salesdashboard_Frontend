import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgstfillingdetailsComponent } from './editgstfillingdetails.component';

describe('EditgstfillingdetailsComponent', () => {
  let component: EditgstfillingdetailsComponent;
  let fixture: ComponentFixture<EditgstfillingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgstfillingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgstfillingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
