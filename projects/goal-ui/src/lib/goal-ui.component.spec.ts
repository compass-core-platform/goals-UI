import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalUiComponent } from './goal-ui.component';

describe('GoalUiComponent', () => {
  let component: GoalUiComponent;
  let fixture: ComponentFixture<GoalUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
