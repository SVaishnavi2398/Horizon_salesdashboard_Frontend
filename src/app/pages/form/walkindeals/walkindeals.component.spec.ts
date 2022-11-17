import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkindealsComponent } from './walkindeals.component';

describe('WalkindealsComponent', () => {
  let component: WalkindealsComponent;
  let fixture: ComponentFixture<WalkindealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkindealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkindealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
