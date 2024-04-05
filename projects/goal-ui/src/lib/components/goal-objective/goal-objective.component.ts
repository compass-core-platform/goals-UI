import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'lib-goal-objective',
  templateUrl: './goal-objective.component.html',
  styleUrls: ['./goal-objective.component.scss']
})
export class GoalObjectiveComponent implements OnInit {
  routeName: string = 'goals';
  isDisabled: boolean =  true;
  selectedTab: any = 'goals';
  text: any = '';


  constructor(public router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeName = this.router.url.split('/')[2];
      }
    });
  }

  ngOnInit(): void {
  }

  checkObjective(value: string) {
    console.log("input", value.trim());
    if(value.trim() !== '') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onCancel() {
    this.router.navigateByUrl('/creation');
  }

  onNext() {

  }

}
