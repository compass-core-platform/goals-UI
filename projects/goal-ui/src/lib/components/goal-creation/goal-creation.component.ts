import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-goal-creation',
  templateUrl: './goal-creation.component.html',
  styleUrls: ['./goal-creation.component.scss']
})
export class GoalCreationComponent implements OnInit {
  category: string = 'goal';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  start() {
    this.router.navigateByUrl('/objective');
  }

  switchTabs(type: string) {
    console.log("category", type);
    this.category = type
  }

}
