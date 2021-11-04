import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herobanner',
  templateUrl: './herobanner.component.html',
  styleUrls: ['./herobanner.component.scss']
})
export class HerobannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroTextMain = "This is a test";
  heroTextSub = "Test for sub section";

}
