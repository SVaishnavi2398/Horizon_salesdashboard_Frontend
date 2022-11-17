import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetailslistComponent } from './clientdetailslist.component';

describe('ClientdetailslistComponent', () => {
  let component: ClientdetailslistComponent;
  let fixture: ComponentFixture<ClientdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
