import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr3BDetailsComponent } from './gstr3-bdetails.component';

describe('Gstr3BDetailsComponent', () => {
  let component: Gstr3BDetailsComponent;
  let fixture: ComponentFixture<Gstr3BDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gstr3BDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr3BDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
