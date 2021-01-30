import { TestBed } from '@angular/core/testing';

import { MonedesService } from './monedes.service';

describe('MonedesService', () => {
  let service: MonedesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonedesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
