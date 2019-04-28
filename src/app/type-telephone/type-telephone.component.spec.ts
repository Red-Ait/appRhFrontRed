import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTelephoneComponent } from './type-telephone.component';

describe('TypeTelephoneComponent', () => {
  let component: TypeTelephoneComponent;
  let fixture: ComponentFixture<TypeTelephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTelephoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
