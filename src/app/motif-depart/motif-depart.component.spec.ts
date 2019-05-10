import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifDepartComponent } from './motif-depart.component';

describe('MotifDepartComponent', () => {
  let component: MotifDepartComponent;
  let fixture: ComponentFixture<MotifDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
