import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr3bReportComponent } from './gstr3b-report.component';

describe('Gstr3bReportComponent', () => {
  let component: Gstr3bReportComponent;
  let fixture: ComponentFixture<Gstr3bReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gstr3bReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gstr3bReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
