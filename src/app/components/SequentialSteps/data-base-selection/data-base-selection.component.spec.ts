import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseSelectionComponent } from './data-base-selection.component';

describe('DataBaseSelectionComponent', () => {
  let component: DataBaseSelectionComponent;
  let fixture: ComponentFixture<DataBaseSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBaseSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBaseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
