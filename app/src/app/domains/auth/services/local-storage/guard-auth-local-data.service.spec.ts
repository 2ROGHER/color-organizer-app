import { TestBed } from '@angular/core/testing';

import { GuardAuthLocalDataService } from './guard-auth-local-data.service';

describe('GuardAuthLocalDataService', () => {
  let service: GuardAuthLocalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAuthLocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
