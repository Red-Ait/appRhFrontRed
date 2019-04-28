import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDepartementComponent } from './type-departement.component';

describe('TypeDepartementComponent', () => {
  let component: TypeDepartementComponent;
  let fixture: ComponentFixture<TypeDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
