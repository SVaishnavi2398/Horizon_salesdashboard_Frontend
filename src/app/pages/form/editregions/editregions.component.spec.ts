import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregionsComponent } from './editregions.component';

describe('EditregionsComponent', () => {
  let component: EditregionsComponent;
  let fixture: ComponentFixture<EditregionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditregionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditregionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
