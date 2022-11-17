import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr2aComponent } from './gstr2a.component';

describe('Gstr2aComponent', () => {
  let component: Gstr2aComponent;
  let fixture: ComponentFixture<Gstr2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gstr2aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
