import { TestBed } from '@angular/core/testing';

import { CheffPermisosGuard } from './cheff-permisos.guard';

describe('CheffPermisosGuard', () => {
  let guard: CheffPermisosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheffPermisosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
