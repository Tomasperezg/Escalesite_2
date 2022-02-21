import { animation, 
         style, 
         animate, 
         trigger,
         state, 
         transition, 
         useAnimation } 
         from '@angular/animations';


export const openCloseAnimation = trigger('slideIn', [
    state('*', style({
      transform: 'translateY(100%)',
      
    })),
    state('in', style({
      transform: 'translateY(0)',
      
    })),
    state('out',   style({
      transform: 'translateY(-150%)',
     
    })),
    transition('* => in', animate('400ms ease-in')),
    transition('in => out', animate('400ms ease-in'))
  ]);

