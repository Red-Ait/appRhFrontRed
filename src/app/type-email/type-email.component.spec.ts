import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEmailComponent } from './type-email.component';

describe('TypeEmailComponent', () => {
  let component: TypeEmailComponent;
  let fixture: ComponentFixture<TypeEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
