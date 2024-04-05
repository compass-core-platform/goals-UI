import { ModuleWithProviders, NgModule } from '@angular/core';
import { GoalUiComponent } from './goal-ui.component';
import { GoalCreationComponent } from './components/goal-creation/goal-creation.component';
import { GoalObjectiveComponent } from './components/goal-objective/goal-objective.component';
import { GoalsListComponent } from './components/goals-list/goals-list.component';
import { TableContentComponent } from './components/table-content/table-content.component';
import { OwnersListComponent } from './components/owners-list/owners-list.component';
import { OwnersGroupComponent } from './components/owners-group/owners-group.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { GoalService } from './services/goal.service';



@NgModule({
  declarations: [
    GoalUiComponent,
    GoalCreationComponent,
    GoalObjectiveComponent,
    GoalsListComponent,
    TableContentComponent,
    OwnersListComponent,
    OwnersGroupComponent
  ],
  imports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    GoalUiComponent
  ]
})
export class GoalUiModule { 
  static forRoot(configuration: any): ModuleWithProviders<GoalUiModule> {
    return {
      ngModule: GoalUiModule,
      providers: [GoalService, {provide: 'config', useValue: configuration}]
    };
  }
}
