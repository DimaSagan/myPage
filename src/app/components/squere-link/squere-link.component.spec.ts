import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquereLinkComponent } from './squere-link.component';

describe('SquereLinkComponent', () => {
  let component: SquereLinkComponent;
  let fixture: ComponentFixture<SquereLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquereLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquereLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
