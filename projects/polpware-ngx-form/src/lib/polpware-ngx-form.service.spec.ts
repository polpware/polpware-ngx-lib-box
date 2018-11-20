import { TestBed } from '@angular/core/testing';

import { PolpwareNgxFormService } from './polpware-ngx-form.service';

describe('PolpwareNgxFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolpwareNgxFormService = TestBed.get(PolpwareNgxFormService);
    expect(service).toBeTruthy();
  });
});
