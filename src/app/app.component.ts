import { Component } from '@angular/core';
import { openCloseAnimation } from './animations/open-close'
import { mobilMenuIconChange } from './animations/mobil-menu-icon'
import { slideInAnimation } from './animations/router-animation';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ openCloseAnimation, mobilMenuIconChange, slideInAnimation ],
  

  
})
export class AppComponent {
  title = 'Escalesite';

  constructor( public _loaderService: LoaderService){

  }

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

  prepareRoute(outlet: RouterOutlet){
    return outlet && 
    outlet.activatedRouteData &&
    outlet.activatedRouteData.animation;
  }
   
}
