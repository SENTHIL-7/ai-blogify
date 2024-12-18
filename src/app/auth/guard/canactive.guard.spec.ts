import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canactiveGuard } from './canactive.guard';

describe('canactiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
