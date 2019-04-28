import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePeriodeDepartementComponent } from './type-periode-departement.component';

describe('TypePeriodeDepartementComponent', () => {
  let component: TypePeriodeDepartementComponent;
  let fixture: ComponentFixture<TypePeriodeDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePeriodeDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePeriodeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
