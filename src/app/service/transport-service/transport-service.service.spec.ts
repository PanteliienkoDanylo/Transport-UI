import { TestBed, inject } from '@angular/core/testing';

import { TransportServiceService } from './transport-service.service';

describe('TransportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportServiceService]
    });
  });

  it('should be created', inject([TransportServiceService], (service: TransportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
