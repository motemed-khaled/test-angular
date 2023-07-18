import { TestBed } from '@angular/core/testing';

import { StaticCartService } from './static-cart.service';

describe('StaticCartService', () => {
  let service: StaticCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
