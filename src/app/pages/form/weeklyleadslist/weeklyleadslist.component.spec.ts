import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyleadslistComponent } from './weeklyleadslist.component';

describe('WeeklyleadslistComponent', () => {
  let component: WeeklyleadslistComponent;
  let fixture: ComponentFixture<WeeklyleadslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyleadslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyleadslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
