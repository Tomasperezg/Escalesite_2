import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roundrec',
  templateUrl: './roundrec.component.html',
  styleUrls: ['./roundrec.component.scss']
})
export class RoundrecComponent implements OnInit {

  @Input() imageUrl = '';
  @Input() className = '';
  @Input() text = '';
  @Input() textLink = '';
  @Input() link = '';

  constructor() { }

  ngOnInit() {
  }

}
