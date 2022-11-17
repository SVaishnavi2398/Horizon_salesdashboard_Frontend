import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstdetailslistComponent } from './gstdetailslist.component';

describe('GstdetailslistComponent', () => {
  let component: GstdetailslistComponent;
  let fixture: ComponentFixture<GstdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstdetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
