import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequentialStepsComponent } from './sequential-steps.component';

describe('SequentialStepsComponent', () => {
  let component: SequentialStepsComponent;
  let fixture: ComponentFixture<SequentialStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequentialStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequentialStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
