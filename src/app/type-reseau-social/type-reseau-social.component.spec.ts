import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeReseauSocialComponent } from './type-reseau-social.component';

describe('TypeReseauSocialComponent', () => {
  let component: TypeReseauSocialComponent;
  let fixture: ComponentFixture<TypeReseauSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeReseauSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeReseauSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
