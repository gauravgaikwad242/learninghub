import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesIntroComponent } from './observables-intro.component';

describe('ObservablesIntroComponent', () => {
  let component: ObservablesIntroComponent;
  let fixture: ComponentFixture<ObservablesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
