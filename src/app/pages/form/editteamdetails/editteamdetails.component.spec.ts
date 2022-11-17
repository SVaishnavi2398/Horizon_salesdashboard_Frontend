import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteamdetailsComponent } from './editteamdetails.component';

describe('EditteamdetailsComponent', () => {
  let component: EditteamdetailsComponent;
  let fixture: ComponentFixture<EditteamdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditteamdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditteamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
