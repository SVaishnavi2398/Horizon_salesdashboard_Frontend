import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupslistComponent } from './groupslist.component';

describe('GroupslistComponent', () => {
  let component: GroupslistComponent;
  let fixture: ComponentFixture<GroupslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
