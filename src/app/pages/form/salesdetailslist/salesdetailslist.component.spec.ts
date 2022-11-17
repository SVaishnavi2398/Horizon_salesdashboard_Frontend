import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdetailslistComponent } from './salesdetailslist.component';

describe('SalesdetailslistComponent', () => {
  let component: SalesdetailslistComponent;
  let fixture: ComponentFixture<SalesdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
