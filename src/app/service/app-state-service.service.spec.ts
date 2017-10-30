import { TestBed, inject } from '@angular/core/testing';

import { AppStateServiceService } from './app-state-service.service';

describe('AppStateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateServiceService]
    });
  });

  it('should be created', inject([AppStateServiceService], (service: AppStateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
