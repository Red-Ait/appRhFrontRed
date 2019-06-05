import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurRoleTestComponent } from './administrateur-role-test.component';

describe('AdministrateurRoleTestComponent', () => {
  let component: AdministrateurRoleTestComponent;
  let fixture: ComponentFixture<AdministrateurRoleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrateurRoleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurRoleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
