import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2binvocesComponent } from './b2binvoces.component';

describe('B2binvocesComponent', () => {
  let component: B2binvocesComponent;
  let fixture: ComponentFixture<B2binvocesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2binvocesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2binvocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
