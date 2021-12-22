import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-widht-banner',
  templateUrl: './full-widht-banner.component.html',
  styleUrls: ['./full-widht-banner.component.scss']
})
export class FullWidhtBannerComponent implements OnInit {

  @Input() imgSRC = '';
  @Input() imgALT = '';

  constructor() { }

  ngOnInit() {
  }

}
