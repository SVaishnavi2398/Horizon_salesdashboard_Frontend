import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubregionsComponent } from './editsubregions.component';

describe('EditsubregionsComponent', () => {
  let component: EditsubregionsComponent;
  let fixture: ComponentFixture<EditsubregionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubregionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubregionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
