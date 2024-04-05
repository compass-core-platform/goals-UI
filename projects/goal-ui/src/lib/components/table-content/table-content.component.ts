import { Component, Input, OnInit } from '@angular/core';
export interface TableRow {
  name: string,
  period: string,
  status: string,
  percentage: string,
  members: Array<string>
}

@Component({
  selector: 'lib-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {

  @Input() tableData: any = [];

  header: any = [];
  keys: any = []

  constructor() { }

  ngOnInit(): void {
    this.header = Object.values(this.tableData[0]);
    this.keys = Object.keys(this.tableData[0]);
  }

  getInitials(name: string) {
    const parts = name.split(' ');
    return parts.map(part => part.charAt(0)).join('');
  }

}
