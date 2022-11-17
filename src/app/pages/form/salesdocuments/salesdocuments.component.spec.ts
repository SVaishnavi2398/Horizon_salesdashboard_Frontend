import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdocumentsComponent } from './salesdocuments.component';

describe('SalesdocumentsComponent', () => {
  let component: SalesdocumentsComponent;
  let fixture: ComponentFixture<SalesdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
