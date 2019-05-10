import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivreParComponent } from './delivre-par.component';

describe('DelivreParComponent', () => {
  let component: DelivreParComponent;
  let fixture: ComponentFixture<DelivreParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivreParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivreParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
