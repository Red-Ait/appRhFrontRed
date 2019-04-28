import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSalaireComponent } from './type-salaire.component';

describe('TypeSalaireComponent', () => {
  let component: TypeSalaireComponent;
  let fixture: ComponentFixture<TypeSalaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSalaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
