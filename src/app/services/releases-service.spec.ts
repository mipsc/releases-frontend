import { TestBed } from '@angular/core/testing';

import { ReleasesService } from './releases.service';

describe('AuthorsServiceService', () => {
  let service: ReleasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
