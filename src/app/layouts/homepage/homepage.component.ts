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

}
