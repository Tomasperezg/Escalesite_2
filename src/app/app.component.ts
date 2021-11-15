import { Component } from '@angular/core';
import { openCloseAnimation } from './animations/open-close'
import { mobilMenuIconChange } from './animations/mobil-menu-icon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ openCloseAnimation, mobilMenuIconChange ]

  
})
export class AppComponent {
  title = 'Escalesite';


  // Nav Controller
  slideInState = false;

  changeState(){
    this.slideInState = !this.slideInState;

  }

   // flag be consumed by the template
   isHamburguer = true;
   onClick() {
     this.isHamburguer = !this.isHamburguer;
   }
}
