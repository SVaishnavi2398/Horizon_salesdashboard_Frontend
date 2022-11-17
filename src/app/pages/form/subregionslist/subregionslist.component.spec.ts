import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregionslistComponent } from './subregionslist.component';

describe('SubregionslistComponent', () => {
  let component: SubregionslistComponent;
  let fixture: ComponentFixture<SubregionslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubregionslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
