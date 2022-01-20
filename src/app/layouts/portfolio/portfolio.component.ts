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

  // 
// Project 1
roundrecLeftImageUrl = "assets/gallery/blackbirdhomesTile.png";
roundrecLeftText = "BlackBird Homes GR";
roundrecLeftTextLink = "Learn More →";
roundrecLeftLinkUrl = "/portfolio/blackbird-homes-gr";
roundrecLeftClass = "roundrecPortfolioClass"


// project 2
roundrecRightImageUrl = "assets/gallery/MomentumCenterTile.png"
roundrecRightText = "Momentum Center"
roundrecRightTextLink = "Learn More →"
roundrecRightLinkUrl = "/portfolio/momentum-center"
roundrecRightClass = "roundrecPortfolioClass"  


}


