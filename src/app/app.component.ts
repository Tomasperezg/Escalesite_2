import { Component } from '@angular/core';
import { openCloseAnimation } from './animations/open-close'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ openCloseAnimation ]

  
})
export class AppComponent {
  title = 'Escalesite';


  // Nav Controller
  slideInState = false;

  changeState(){
    this.slideInState = !this.slideInState;

  }
}
