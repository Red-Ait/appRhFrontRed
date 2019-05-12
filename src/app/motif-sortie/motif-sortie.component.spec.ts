import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifSortieComponent } from './motif-sortie.component';

describe('MotifSortieComponent', () => {
  let component: MotifSortieComponent;
  let fixture: ComponentFixture<MotifSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
