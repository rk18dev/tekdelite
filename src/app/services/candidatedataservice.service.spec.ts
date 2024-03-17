import { TestBed } from '@angular/core/testing';

import { CandidatedataserviceService } from './candidatedataservice.service';

describe('CandidatedataserviceService', () => {
  let service: CandidatedataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatedataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
