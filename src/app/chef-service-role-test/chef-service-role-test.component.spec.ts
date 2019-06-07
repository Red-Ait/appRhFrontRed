import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefServiceRoleTestComponent } from './chef-service-role-test.component';

describe('ChefServiceRoleTestComponent', () => {
  let component: ChefServiceRoleTestComponent;
  let fixture: ComponentFixture<ChefServiceRoleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefServiceRoleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefServiceRoleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
