import { TestBed } from '@angular/core/testing';

import { CardDownloadService } from './card-download.service';

describe('CardDownloadService', () => {
  let service: CardDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
