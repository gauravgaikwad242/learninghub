import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISelectionComponent } from './uiselection.component';

describe('UISelectionComponent', () => {
  let component: UISelectionComponent;
  let fixture: ComponentFixture<UISelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UISelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UISelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
