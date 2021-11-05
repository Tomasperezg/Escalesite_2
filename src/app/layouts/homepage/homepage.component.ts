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

  currentMainText = "This is a Test";
  currentSubText = "This is a text for sub Text";
  currentheroTextContainerClass = "heroTextContainerHome";

}
