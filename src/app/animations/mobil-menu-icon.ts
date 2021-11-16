import {  
    style, 
    animate, 
    trigger,
    state, 
    transition, 
    } from '@angular/animations';

export const mobilMenuIconChange = trigger('hamburguerX', [
    /*
      state hamburguer => is the regular 3 lines style.
      states topX, hide, and bottomX => used to style the X element
    */
    state('hamburguer', style({})),
    // style top bar to create the X
    state(
      'topX',
      style({
        transform: 'rotate(46deg)',
        transformOrigin: 'left',
        margin: '8px',
      })
    ),
    // hides element when create the X (used in the middle bar)
    state(
      'hide',
      style({
        opacity: 0,
      })
    ),
    // style bottom bar to create the X
    state(
      'bottomX',
      style({
        transform: 'rotate(-46deg)',
        transformOrigin: 'left',
        margin: '8px',
      })
    ),
    transition('* => *', [
      animate('600ms ease-in'), // controls animation speed
    ]),
  ])