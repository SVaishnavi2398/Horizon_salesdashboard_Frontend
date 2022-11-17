import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstfillingdetailsviewComponent } from './gstfillingdetailsview.component';

describe('GstfillingdetailsviewComponent', () => {
  let component: GstfillingdetailsviewComponent;
  let fixture: ComponentFixture<GstfillingdetailsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstfillingdetailsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstfillingdetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
