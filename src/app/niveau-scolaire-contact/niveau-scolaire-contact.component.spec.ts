import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauScolaireContactComponent } from './niveau-scolaire-contact.component';

describe('NiveauScolaireContactComponent', () => {
  let component: NiveauScolaireContactComponent;
  let fixture: ComponentFixture<NiveauScolaireContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauScolaireContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauScolaireContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
