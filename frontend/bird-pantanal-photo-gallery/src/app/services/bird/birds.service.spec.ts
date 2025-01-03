import { TestBed } from '@angular/core/testing';

import { BirdsService } from './birds.service';

describe('BirdsService', () => {
  let service: BirdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
