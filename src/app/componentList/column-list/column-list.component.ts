import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.scss']
})
export class ColumnListComponent implements OnInit {

  constructor() { 


  }

  ngOnInit() {
  }

  titleColumn1 = "Development";
  titleColumn2 = "Databases";
  titleColumn3 = "Digital Tools";
  titleClass = "columnsTitle"

  techList: any[] = [
    {
      item: "HTML"
    }, 
    {
      item: "CSS"
    },
    {
      item: "JavaScript"
    },
    {
      item: "Angular"
    }, 
    {
      item: "AngularJS"
    },
    {
      item: "Python"
    },
    {
      item: "Java"
    },
    {
      item: "Node"
    },
    {
      item: "Express"
    }
  ];

  databaseList: any[] = [
    {
      name: "MongoDB"
    },
    {
      name: "MySQL"
    },
    {
      name: "PostgresSQL"
    },
    {
      name: "AWS"
    } 

  ];

  toolsList: any[] = [
    {
      item: "Adobe Phothsop"
    }, 
    {
      item: "Adobe XD"
    },
    {
      item: "Adobe Illustrator"
    }, 
    {
      item: "Workfront"
    }, 
    {
      item: "Trello"
    },
    {
      item: "Version Control"
    }
  ]


}
