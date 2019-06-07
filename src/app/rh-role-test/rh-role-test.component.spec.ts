import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhRoleTestComponent } from './rh-role-test.component';

describe('RhRoleTestComponent', () => {
  let component: RhRoleTestComponent;
  let fixture: ComponentFixture<RhRoleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhRoleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhRoleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
