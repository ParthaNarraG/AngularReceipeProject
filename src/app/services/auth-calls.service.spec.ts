import { TestBed } from '@angular/core/testing';

import { AuthCallsService } from './auth-calls.service';

describe('AuthCallsService', () => {
  let service: AuthCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
