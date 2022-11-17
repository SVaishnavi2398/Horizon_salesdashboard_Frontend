import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalesdetailsComponent } from './editsalesdetails.component';

describe('EditsalesdetailsComponent', () => {
  let component: EditsalesdetailsComponent;
  let fixture: ComponentFixture<EditsalesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
