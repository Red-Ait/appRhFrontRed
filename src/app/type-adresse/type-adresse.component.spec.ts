import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAdresseComponent } from './type-adresse.component';

describe('TypeAdresseComponent', () => {
  let component: TypeAdresseComponent;
  let fixture: ComponentFixture<TypeAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
