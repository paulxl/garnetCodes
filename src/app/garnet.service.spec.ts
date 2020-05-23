import { TestBed } from '@angular/core/testing';

import { GarnetService } from './garnet.service';

describe('GarnetService', () => {
  let service: GarnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
