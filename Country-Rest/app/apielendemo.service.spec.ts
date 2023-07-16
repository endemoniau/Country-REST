import { TestBed } from '@angular/core/testing';

import { ApielendemoService } from './apielendemo.service';

describe('ApielendemoService', () => {
  let service: ApielendemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApielendemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
