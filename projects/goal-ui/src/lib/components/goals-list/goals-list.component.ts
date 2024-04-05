import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  search = '';
  isDropdownOpen: boolean = false;
  goalsData: any = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goalsData = [
      { objectivename: 'Objective Name', period: 'Time Period', status: 'Status', progress: 'Overall Progress', members: 'Members'},
      { objectivename: 'Create sustainable wage', period: 'Q1 (1 Jan - 31 Mar)', status: 'In Progress', progress: '30', members: ["Naveen Kumar", "Pavan Kumar", "Arun Kumar", "Vijay Kumar", "Kalyan Kumar"]},
      { objectivename: 'Create sustainable wage', period: 'Q1 (1 Jan - 31 Mar)', status: 'In Progress', progress: '40', members: []},
      { objectivename: 'Create sustainable wage', period: 'Q1 (1 Jan - 31 Mar)', status: 'In Progress', progress: '60', members: []},
      { objectivename: 'Create sustainable wage', period: 'Q1 (1 Jan - 31 Mar)', status: 'In Progress', progress: '20', members: []},
      { objectivename: 'Create sustainable wage', period: 'Q1 (1 Jan - 31 Mar)', status: 'In Progress', progress: '10', members: []},
    ];
  }

  start() {
    this.router.navigateByUrl('/objective');
  }

  searchQuery() {

  }

  toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
  }
  

}
