import { TestBed } from '@angular/core/testing';

import { BossaboxService } from './bossabox.service';

describe('BossaboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BossaboxService = TestBed.get(BossaboxService);
    expect(service).toBeTruthy();
  });
});
