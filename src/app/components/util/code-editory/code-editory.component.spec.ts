import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditoryComponent } from './code-editory.component';

describe('CodeEditoryComponent', () => {
  let component: CodeEditoryComponent;
  let fixture: ComponentFixture<CodeEditoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeEditoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeEditoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
