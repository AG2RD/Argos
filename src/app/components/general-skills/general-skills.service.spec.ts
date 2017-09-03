import { TestBed, inject } from '@angular/core/testing';

import { GeneralSkillsService } from './general-skills.service';

describe('GeneralSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralSkillsService]
    });
  });

  it('should be created', inject([GeneralSkillsService], (service: GeneralSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
