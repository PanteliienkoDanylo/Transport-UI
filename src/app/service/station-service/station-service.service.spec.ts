import { TestBed, inject } from '@angular/core/testing';

import { StationServiceService } from './station-service.service';

describe('StationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationServiceService]
    });
  });

  it('should be created', inject([StationServiceService], (service: StationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
