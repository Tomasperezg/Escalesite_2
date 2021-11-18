import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // Button functionallity
  functionCall(event) {
    console.log('functionCall', event);
    this.router.navigateByUrl('/about-us');
  }

  currentMainText = "Helping Businesses Grow Through Thecnology";
  currentSubText = "Here to help you and your business find success.";
  currentheroTextContainerClass = "heroTextContainerHome";
  heroImageUrl = "assets/gallery/Escalesite_Hero_HomePage.png";

  mainText = "EscaleSite is a small web and design agency located in the Grand Rapids Michigan area. " + 
  "Using the best digital tools and technologies to help people and organizations to find success. ";

  buttonText = "Learn More";

  roundrecLeftImageUrl = "assets/gallery/EscaleSite_roundrec_Home_Left.png";
  roundrecLeftClass = "roundrecLeftClass";
  roundrecLeftText = "Building custom software specific for the needs of your business.";
  roundrecLeftTextLink = "See what we can do → ";
  roundrecLeftLinkUrl = "/about-us";

  roundrecRightImageUrl = "assets/gallery/Escalesite_roundrec_Home_Right.png";
  roundrecRightClass = "roundrecRightClass";
  roundrecRightText = "Designs that will help to improve your customers experience.";
  roundrecRightTextLink = "Check our portfolio → ";
  roundrecRightLinkUrl = "/portfolio";

  heroRightImageUrl = "assets/gallery/Escalesite_Hero2_HomePage.png";
  currentheroRightTextContainerClass = "heroRightTextContainerHome";
  currentMainTextRight = "Tell us how can we help your business grow";
  currentSubTextRight = "Send us a message →  ";
  currentTextUrlRight = "/contact-us";
}
