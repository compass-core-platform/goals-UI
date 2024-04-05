import { TestBed } from '@angular/core/testing';

import { GoalUiService } from './goal-ui.service';

describe('GoalUiService', () => {
  let service: GoalUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
