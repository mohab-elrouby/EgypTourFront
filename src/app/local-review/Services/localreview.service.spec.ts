import { TestBed } from '@angular/core/testing';

import { LocalreviewService } from './localreview.service';

describe('LocalreviewService', () => {
  let service: LocalreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
