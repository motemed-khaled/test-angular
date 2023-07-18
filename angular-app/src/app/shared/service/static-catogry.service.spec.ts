import { TestBed } from '@angular/core/testing';

import { StaticCatogryService } from './static-catogry.service';

describe('StaticCatogryService', () => {
  let service: StaticCatogryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticCatogryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
