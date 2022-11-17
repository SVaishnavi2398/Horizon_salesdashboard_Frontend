import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteamleadersComponent } from './editteamleaders.component';

describe('EditteamleadersComponent', () => {
  let component: EditteamleadersComponent;
  let fixture: ComponentFixture<EditteamleadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditteamleadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditteamleadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
