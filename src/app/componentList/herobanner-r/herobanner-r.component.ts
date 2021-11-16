import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herobanner-r',
  templateUrl: './herobanner-r.component.html',
  styleUrls: ['./herobanner-r.component.scss']
})
export class HerobannerRComponent implements OnInit {

  @Input() maintText = '';
  @Input() subText = '';
  @Input() heroTextContainerClass = '';
  @Input() heroImage = '';

  constructor() { }

  ngOnInit() {
  }


}
