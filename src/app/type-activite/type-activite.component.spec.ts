import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeActiviteComponent } from './type-activite.component';

describe('TypeActiviteComponent', () => {
  let component: TypeActiviteComponent;
  let fixture: ComponentFixture<TypeActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
