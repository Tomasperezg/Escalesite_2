import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonData = '';
  @Input() className = '';
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event) {
    this.onClick.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
