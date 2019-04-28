import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProcheComponent } from './type-proche.component';

describe('TypeProcheComponent', () => {
  let component: TypeProcheComponent;
  let fixture: ComponentFixture<TypeProcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
