import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentMainText = "Creating Custom Software For Businesses";
  currentSubText = "Take a look at our portfolio and see how we have helped our customers.";
  currentheroTextContainerClass = "heroTextContainerPortfolio";
  heroImageUrl = "assets/gallery/Escalesite_Hero_PortfolioPage.png";

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
  lowTitleDataClass = "lowerTitle"
  // Button functionallity
  project_1_url = "https://www.blackbirdhomesgr.com/home"
  functionCall(url) {
    window.open(url);
  }

}


