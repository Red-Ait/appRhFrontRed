import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifEntreeComponent } from './motif-entree.component';

describe('MotifEntreeComponent', () => {
  let component: MotifEntreeComponent;
  let fixture: ComponentFixture<MotifEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
