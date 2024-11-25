import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardComponentComponent } from './learning-card-component.component';

describe('LearningCardComponentComponent', () => {
  let component: LearningCardComponentComponent;
  let fixture: ComponentFixture<LearningCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
