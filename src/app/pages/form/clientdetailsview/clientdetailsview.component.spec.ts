import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetailsviewComponent } from './clientdetailsview.component';

describe('ClientdetailsviewComponent', () => {
  let component: ClientdetailsviewComponent;
  let fixture: ComponentFixture<ClientdetailsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdetailsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
