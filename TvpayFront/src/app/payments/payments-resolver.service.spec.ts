import { TestBed } from '@angular/core/testing';

import { PaymentsResolverService } from './payments-resolver.service';

describe('PaymentsResolverService', () => {
  let service: PaymentsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
