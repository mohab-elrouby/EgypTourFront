import { TestBed } from '@angular/core/testing';

import { ServicereviewService } from './servicereview.service';

describe('ServicereviewService', () => {
  let service: ServicereviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicereviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
