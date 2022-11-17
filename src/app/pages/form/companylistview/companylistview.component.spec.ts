import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylistviewComponent } from './companylistview.component';

describe('CompanylistviewComponent', () => {
  let component: CompanylistviewComponent;
  let fixture: ComponentFixture<CompanylistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanylistviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
