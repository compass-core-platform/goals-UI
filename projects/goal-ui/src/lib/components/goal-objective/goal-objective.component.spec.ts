import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalObjectiveComponent } from './goal-objective.component';

describe('GoalObjectiveComponent', () => {
  let component: GoalObjectiveComponent;
  let fixture: ComponentFixture<GoalObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalObjectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
