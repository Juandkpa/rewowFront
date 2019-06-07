import { TestBed } from '@angular/core/testing';

import { MedicalRecordsService } from './medical-records.service';

describe('MedicalRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalRecordsService = TestBed.get(MedicalRecordsService);
    expect(service).toBeTruthy();
  });
});
