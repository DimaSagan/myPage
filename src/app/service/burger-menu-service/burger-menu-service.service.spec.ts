import { TestBed } from '@angular/core/testing';

import { BurgerMenuServiceService } from './burger-menu-service.service';

describe('BurgerMenuServiceService', () => {
  let service: BurgerMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
