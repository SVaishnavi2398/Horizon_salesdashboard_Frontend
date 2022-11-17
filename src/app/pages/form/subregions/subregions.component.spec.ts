import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregionsComponent } from './subregions.component';

describe('SubregionsComponent', () => {
  let component: SubregionsComponent;
  let fixture: ComponentFixture<SubregionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubregionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
