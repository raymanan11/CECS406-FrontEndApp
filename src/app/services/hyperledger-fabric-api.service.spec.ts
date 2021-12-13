import { TestBed } from '@angular/core/testing';

import { HyperledgerFabricAPIService } from './hyperledger-fabric-api.service';

describe('HyperledgerFabricAPIService', () => {
  let service: HyperledgerFabricAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyperledgerFabricAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
