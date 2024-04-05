import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalCreationComponent, GoalObjectiveComponent } from 'goal-ui';

const routes: Routes = [
  { path:'', redirectTo:'/creation', pathMatch: 'full'},
  { path: 'creation', component: GoalCreationComponent},
  { path: 'objective', component: GoalObjectiveComponent,
    // children: [
    //   {path: 'goals', component: }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
