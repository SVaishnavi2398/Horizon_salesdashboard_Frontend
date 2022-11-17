import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr3BComponent } from './gstr3-b.component';

describe('Gstr3BComponent', () => {
  let component: Gstr3BComponent;
  let fixture: ComponentFixture<Gstr3BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gstr3BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
