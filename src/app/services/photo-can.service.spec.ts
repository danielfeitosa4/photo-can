import { TestBed } from '@angular/core/testing';

import { PhotoCanService } from './photo-can.service';

describe('PhotoCanService', () => {
  let service: PhotoCanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
