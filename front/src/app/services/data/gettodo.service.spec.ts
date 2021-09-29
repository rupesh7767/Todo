import { TestBed } from '@angular/core/testing';

import { GettodoService } from './gettodo.service';

describe('GettodoService', () => {
  let service: GettodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
