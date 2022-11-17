import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealdetaillistComponent } from './dealdetaillist.component';

describe('DealdetaillistComponent', () => {
  let component: DealdetaillistComponent;
  let fixture: ComponentFixture<DealdetaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealdetaillistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
