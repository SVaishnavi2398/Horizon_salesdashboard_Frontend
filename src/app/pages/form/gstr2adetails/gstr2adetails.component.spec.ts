import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2adetailsComponent } from './gstr2adetails.component';

describe('Gstr2adetailsComponent', () => {
  let component: Gstr2adetailsComponent;
  let fixture: ComponentFixture<Gstr2adetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gstr2adetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2adetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
