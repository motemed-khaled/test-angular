import { TestBed } from '@angular/core/testing';

import { CatogryService } from './catogry.service';

describe('CatogryService', () => {
  let service: CatogryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
