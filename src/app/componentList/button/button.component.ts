import { Component, OnInit, Input, Output, HostBinding } from '@angular/core';
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
  @Input() disabled ? = false;


  onClickButton(event) {
    this.onClick.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }


}
