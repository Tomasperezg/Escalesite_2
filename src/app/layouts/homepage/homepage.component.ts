import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentMainText = "Helping Businesses Grow Through Thecnology";
  currentSubText = "Here to help you and your business find success.";
  currentheroTextContainerClass = "heroTextContainerHome";
  heroImageUrl = "assets/gallery/Escalesite_Hero_HomePage.png";

  mainText = "EscaleSite is a small web and design agency located in the Grand Rapids Michigan area." + 
  "Using the best digital tools and technologies to help people and organizations to find success. ";

  buttonText = "Learn More";
}
