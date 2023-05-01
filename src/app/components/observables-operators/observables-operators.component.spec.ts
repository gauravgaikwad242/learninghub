import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesOperatorsComponent } from './observables-operators.component';

describe('ObservablesOperatorsComponent', () => {
  let component: ObservablesOperatorsComponent;
  let fixture: ComponentFixture<ObservablesOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
