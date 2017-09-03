import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSkillsComponent } from './general-skills.component';

describe('GeneralSkillsComponent', () => {
  let component: GeneralSkillsComponent;
  let fixture: ComponentFixture<GeneralSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
