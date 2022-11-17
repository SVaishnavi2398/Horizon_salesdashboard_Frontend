import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmonthlytargetComponent } from './editmonthlytarget.component';

describe('EditmonthlytargetComponent', () => {
  let component: EditmonthlytargetComponent;
  let fixture: ComponentFixture<EditmonthlytargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmonthlytargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmonthlytargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
