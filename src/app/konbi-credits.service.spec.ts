import { TestBed } from '@angular/core/testing';

import { KonbiCreditsService } from './konbi-credits.service';

describe('KonbiCreditsService', () => {
  let service: KonbiCreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonbiCreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
