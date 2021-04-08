import { TestBed } from '@angular/core/testing';

import { JsonServService } from './json-serv.service';

describe('JsonServService', () => {
  let service: JsonServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
