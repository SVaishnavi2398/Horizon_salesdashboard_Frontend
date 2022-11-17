import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubprojectslistComponent } from './subprojectslist.component';

describe('SubprojectslistComponent', () => {
  let component: SubprojectslistComponent;
  let fixture: ComponentFixture<SubprojectslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubprojectslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubprojectslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
