import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescommentsComponent } from './salescomments.component';

describe('SalescommentsComponent', () => {
  let component: SalescommentsComponent;
  let fixture: ComponentFixture<SalescommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalescommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
