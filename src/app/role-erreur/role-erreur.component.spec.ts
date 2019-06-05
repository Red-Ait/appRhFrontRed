import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleErreurComponent } from './role-erreur.component';

describe('RoleErreurComponent', () => {
  let component: RoleErreurComponent;
  let fixture: ComponentFixture<RoleErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
