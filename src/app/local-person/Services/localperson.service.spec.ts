import { TestBed } from '@angular/core/testing';

import { LocalpersonService } from './localperson.service';

describe('LocalpersonService', () => {
  let service: LocalpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
