import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationslistComponent } from './designationslist.component';

describe('DesignationslistComponent', () => {
  let component: DesignationslistComponent;
  let fixture: ComponentFixture<DesignationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
