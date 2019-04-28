import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCollaborateurComponent } from './profil-collaborateur.component';

describe('ProfilCollaborateurComponent', () => {
  let component: ProfilCollaborateurComponent;
  let fixture: ComponentFixture<ProfilCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
