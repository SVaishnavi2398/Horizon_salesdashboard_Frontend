import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionslistComponent } from './regionslist.component';

describe('RegionslistComponent', () => {
  let component: RegionslistComponent;
  let fixture: ComponentFixture<RegionslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
