import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'lib-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {
  search = '';
  isDropdownOpen: boolean = false;
  ownersData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.ownersData = [
      { name: 'Name', designation: 'Designation', endate: 'Enrolled Date'},
      { name: 'Sathosh', designation: 'Chief Information Officer', endate: '12/3/2014'},
      { name: 'Thillai Rajan', designation: 'Civil Service Officer', endate: '1/3/2014'},
      { name: 'Shoaib', designation: 'Chief Information Officer', endate: '13/3/2014'},
      { name: 'Devi', designation: 'Civil Service Officer', endate: '12/2/2014'},
      { name: 'Dilavar PD', designation: 'Chief Information Officer', endate: '1/3/2014'}
      // { name: 'Darshan', designation: 'Civil Service Officer', endate: '11/3/2014'},
      // { name: 'Supriya', designation: 'Chief Information Officer', endate: '12/1/2014'},
      // { name: 'Anil kumar', designation: 'Civil Service Officer', endate: '12/2/2014'},
    ];
  }


  searchQuery() {

  }

  toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
  }
  
  tabChanged(event: any) {
  }

}
