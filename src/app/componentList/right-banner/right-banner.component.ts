import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-banner',
  templateUrl: './right-banner.component.html',
  styleUrls: ['./right-banner.component.scss']
})
export class RightBannerComponent implements OnInit {

  @Input() imageURL = '';
  @Input() imageALT = '';

  constructor() { }

  ngOnInit() {
  }

}
