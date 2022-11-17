import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkindealslistComponent } from './walkindealslist.component';

describe('WalkindealslistComponent', () => {
  let component: WalkindealslistComponent;
  let fixture: ComponentFixture<WalkindealslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkindealslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkindealslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
