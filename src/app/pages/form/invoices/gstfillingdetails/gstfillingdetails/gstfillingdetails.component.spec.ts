import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstfillingdetailsComponent } from './gstfillingdetails.component';

describe('GstfillingdetailsComponent', () => {
  let component: GstfillingdetailsComponent;
  let fixture: ComponentFixture<GstfillingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstfillingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstfillingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
