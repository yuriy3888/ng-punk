import {TestBed} from '@angular/core/testing';

import {BeersService} from './beers.service';
import {HttpClientModule} from '@angular/common/http';

describe('BeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: BeersService = TestBed.get(BeersService);
    expect(service).toBeTruthy();
  });
});
