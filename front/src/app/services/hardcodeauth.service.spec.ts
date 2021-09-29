import { TestBed } from '@angular/core/testing';

import { HardcodeauthService } from './hardcodeauth.service';

describe('HardcodeauthService', () => {
  let service: HardcodeauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodeauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
