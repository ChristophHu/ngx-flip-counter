import { TestBed } from '@angular/core/testing';

import { NgxFlipCounterService } from './ngx-flip-counter.service';

describe('NgxFlipCounterService', () => {
  let service: NgxFlipCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFlipCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
