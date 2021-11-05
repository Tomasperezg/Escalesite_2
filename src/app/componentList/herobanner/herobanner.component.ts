import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herobanner',
  templateUrl: './herobanner.component.html',
  styleUrls: ['./herobanner.component.scss']
})
export class HerobannerComponent implements OnInit {

  @Input() maintText = '';
  @Input() subText = '';
  @Input() heroTextContainerClass = '';

  constructor() { }

  ngOnInit() {
  }



}
