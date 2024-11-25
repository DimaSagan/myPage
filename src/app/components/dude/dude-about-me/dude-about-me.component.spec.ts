import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudeAboutMeComponent } from './dude-about-me.component';

describe('DudeAboutMeComponent', () => {
  let component: DudeAboutMeComponent;
  let fixture: ComponentFixture<DudeAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DudeAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DudeAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
