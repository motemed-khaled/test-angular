import { TestBed } from '@angular/core/testing';

import { StaticPrpductService } from './static-prpduct.service';

describe('StaticPrpductService', () => {
  let service: StaticPrpductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticPrpductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
