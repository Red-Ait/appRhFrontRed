import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAttestationComponent } from './type-attestation.component';

describe('TypeAttestationComponent', () => {
  let component: TypeAttestationComponent;
  let fixture: ComponentFixture<TypeAttestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAttestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
