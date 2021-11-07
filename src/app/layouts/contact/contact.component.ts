import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentMainText = "Let Us Be Part of Your Journey!";
  currentSubText = "Send us a message with an overview of your project and we will reply as soon as possible.";
  currentheroTextContainerClass = "heroTextContainerContact";
  heroImageUrl = "assets/gallery/Escalesite_Hero_ContactPage.png";
}
