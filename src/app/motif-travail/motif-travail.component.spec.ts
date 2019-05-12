import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifTravailComponent } from './motif-travail.component';

describe('MotifTravailComponent', () => {
  let component: MotifTravailComponent;
  let fixture: ComponentFixture<MotifTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
