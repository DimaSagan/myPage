import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudeHeroComponent } from './dude-hero.component';

describe('DudeHeroComponent', () => {
  let component: DudeHeroComponent;
  let fixture: ComponentFixture<DudeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DudeHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DudeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
