import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackbirdproject',
  templateUrl: './blackbirdproject.component.html',
  styleUrls: ['./blackbirdproject.component.scss']
})
export class BlackbirdprojectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   titleData = "BlackBird Homes GR";

  imageSRC = "assets/gallery/blackbirdhomesTile.png";
  imageALT = "BlackBirdHomes Tile";

  mainText = "An Small home renovation company located in the Grand Rapids, MI. area. " +
  "BlackBird Homes GR was in need of a website refresh. Their old software was having a lot issues mostly with tablet and mobil users. " +
  "Content was not rendering correctly for these users or the browswer would try to fit the desktop version in mobil devices. " + 
  "";

  mainText2 = "After meeting with the owner, testing the page for errors it was decided that a complete 360 degress page refresh was needed. " +
  "We designed, developed, tested, and launched their new website that fixed all errors and also enhanced the user experince.";

  Project_1_buttonText = "View Live Project"
  lowTitleData = "Technologies used"


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
  // Button functionallity
  project_1_url = "https://www.blackbirdhomesgr.com/home"
  functionCall(url) {
    window.open(url);
  }

}
