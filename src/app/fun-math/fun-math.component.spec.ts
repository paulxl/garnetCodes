import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunMathComponent } from './fun-math.component';

describe('FunMathComponent', () => {
  let component: FunMathComponent;
  let fixture: ComponentFixture<FunMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
