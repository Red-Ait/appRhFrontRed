import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProfessionnelComponent } from './status-professionnel.component';

describe('StatusProfessionnelComponent', () => {
  let component: StatusProfessionnelComponent;
  let fixture: ComponentFixture<StatusProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
