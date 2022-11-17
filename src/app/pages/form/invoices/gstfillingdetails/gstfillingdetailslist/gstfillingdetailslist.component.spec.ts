import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstfillingdetailslistComponent } from './gstfillingdetailslist.component';

describe('GstfillingdetailslistComponent', () => {
  let component: GstfillingdetailslistComponent;
  let fixture: ComponentFixture<GstfillingdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstfillingdetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstfillingdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
