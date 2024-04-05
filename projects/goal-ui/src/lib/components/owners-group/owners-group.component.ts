import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-owners-group',
  templateUrl: './owners-group.component.html',
  styleUrls: ['./owners-group.component.scss']
})
export class OwnersGroupComponent implements OnInit {
  groups = [
    { name: 'Batch 1', membersCount: 7, createdOn: '25-03-2024', members: ["Naveen Kumar", "Pavan Kumar", "Arun Kumar", "Vijay Kumar", "Kalyan Kumar"]},
    { name: 'Batch 2', membersCount: 4, createdOn: '25-03-2024',  members: ["Naveen Kumar", "Pavan Kumar", "Arun Kumar", "Vijay Kumar", "Kalyan Kumar"]},
    { name: 'Batch 3', membersCount: 3, createdOn: '25-03-2024',  members: ["Naveen Kumar", "Pavan Kumar", "Arun Kumar", "Vijay Kumar", "Kalyan Kumar"] },
    { name: 'Batch 4', membersCount: 2, createdOn: '25-03-2024',  members: ["Naveen Kumar", "Pavan Kumar", "Arun Kumar", "Vijay Kumar", "Kalyan Kumar"]},
    { name: 'Batch 5', membersCount: 10, createdOn: '25-03-2024' , members: []},
    { name: 'Batch 6', membersCount: 11, createdOn: '25-03-2024', members: [] },
    { name: 'Batch 7', membersCount: 4, createdOn: '25-03-2024', members: [] },
    { name: 'Batch 8', membersCount: 5, createdOn: '25-03-2024', members: [] }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  getInitials(name: string) {
    const parts = name.split(' ');
    return parts.map(part => part.charAt(0)).join('');
  }

}
