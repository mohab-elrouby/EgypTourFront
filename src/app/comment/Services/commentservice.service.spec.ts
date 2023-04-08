import { TestBed } from '@angular/core/testing';

import { CommentserviceService } from './commentservice.service';

describe('CommentserviceService', () => {
  let service: CommentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
