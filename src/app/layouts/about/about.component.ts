import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentMainText = "Building Software and Creating Life Time Connections";
  currentSubText = "See what we can do for you and your organization!";
  currentheroTextContainerClass = "heroTextContainerAbout";
  heroImageUrl = "assets/gallery/Escalesite_Hero_AboutPage.png";

  mainText = "EscaleSite is a small web design and applications development agency located in the Grand Rapids Michigan area. " + 
  "We design and develop websites, web applications and custom software of different source. " + 
  "The process is simple, just send us a message with a description of your project and we will contact you to schedule a free consultation. " + 
  "There we will talk about the project budget, setting a target date, design and development timeline and provide answers to all your questions.";

  titleData = "List of Thecnologies";


  devList: any[] = [
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
      item: "MongoDB"
    },
    {
      item: "MySQL"
    },
    {
      item: "PostgresSQL"
    },
    {
      item: "AWS"
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


  titleData2 = "Services";

  img = "assets/gallery/EscaleBanner2sbRight.jpg";
  alt = "Laptop image";

}
