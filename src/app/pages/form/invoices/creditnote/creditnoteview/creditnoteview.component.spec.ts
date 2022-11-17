import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditnoteviewComponent } from './creditnoteview.component';

describe('CreditnoteviewComponent', () => {
  let component: CreditnoteviewComponent;
  let fixture: ComponentFixture<CreditnoteviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditnoteviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditnoteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
