import { TestBed } from '@angular/core/testing';

import { BlogGenerationService } from './blog-generation.service';

describe('BlogGenerationService', () => {
  let service: BlogGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
