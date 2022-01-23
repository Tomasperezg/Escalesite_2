import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momentumproject',
  templateUrl: './momentumproject.component.html',
  styleUrls: ['./momentumproject.component.scss']
})
export class MomentumprojectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  project_2_title = "Momentum Center";
  project_2_imageSRC = "assets/gallery/MomentumCenterTile.png";
  project_2_imageALT = "Momentum Center Image"
  project_2_paragraph1 = "A nonprofit organization created to help and develop communities. ";
  project_2_paragraph2 = "A new checkin portal was desperately needed. Their original version had some major issues and we helped them by creating a new portal. For this project we made us of Angular 8 technologies. ";


  devList: any[] = [
    {
      item: "HTML"
    }, 
    {
      item: "CSS"
    },
    {
      item: "Angular"
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
      item: "MongoDB"
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
      item: "Trello"
    },
    {
      item: "Version Control"
    }
  ]

}
