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

  mainText = "Some Text Example";

}


