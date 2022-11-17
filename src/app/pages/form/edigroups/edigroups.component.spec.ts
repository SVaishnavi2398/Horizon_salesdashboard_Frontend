import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdigroupsComponent } from './edigroups.component';

describe('EdigroupsComponent', () => {
  let component: EdigroupsComponent;
  let fixture: ComponentFixture<EdigroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdigroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdigroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
