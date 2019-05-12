import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAttestationEntrepriseComponent } from './type-attestation-entreprise.component';

describe('TypeAttestationEntrepriseComponent', () => {
  let component: TypeAttestationEntrepriseComponent;
  let fixture: ComponentFixture<TypeAttestationEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAttestationEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAttestationEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
