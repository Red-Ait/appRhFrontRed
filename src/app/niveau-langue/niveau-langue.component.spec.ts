import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauLangueComponent } from './niveau-langue.component';

describe('NiveauLangueComponent', () => {
  let component: NiveauLangueComponent;
  let fixture: ComponentFixture<NiveauLangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauLangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauLangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
