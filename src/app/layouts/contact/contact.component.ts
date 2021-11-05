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

  currentMainText = "This is a test for Contact";
  currentSubText = "This is a text for sub Text Contact";
  currentheroTextContainerClass = "heroTextContainerContact";
}
