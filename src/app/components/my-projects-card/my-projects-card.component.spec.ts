import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsCardComponent } from './my-projects-card.component';

describe('MyProjectsCardComponent', () => {
  let component: MyProjectsCardComponent;
  let fixture: ComponentFixture<MyProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
