import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.scss']
})
export class ColumnListComponent implements OnInit {

  @Input() devList: string[];
  @Input() databaseList: string[];
  @Input() toolsList: string[];

  constructor() { 


  }

  ngOnInit() {
  }

  titleColumn1 = "Development";
  titleColumn2 = "Databases";
  titleColumn3 = "Digital Tools";
  titleClass = "columnsTitle"


  


}
