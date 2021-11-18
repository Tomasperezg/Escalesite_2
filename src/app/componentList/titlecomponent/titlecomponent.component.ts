import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titlecomponent',
  templateUrl: './titlecomponent.component.html',
  styleUrls: ['./titlecomponent.component.scss']
})
export class TitlecomponentComponent implements OnInit {

  @Input() titleText = '';

  constructor() { }

  ngOnInit() {
  }

}
