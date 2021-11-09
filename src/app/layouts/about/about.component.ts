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
}
