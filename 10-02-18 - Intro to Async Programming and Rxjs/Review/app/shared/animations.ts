import {trigger, query, style, transition, animateChild, animate, group, state} from '@angular/animations'

export const greenTransition = 
    trigger('toGreen', [
        transition('completed => incomplete', [
            animate('400ms')
        ]),
        transition('incomplete => completed', [
            animate('400ms')
        ]),
        state('completed', style({backgroundColor: 'green'}))
    ])


export const routerAnimations =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('TodosPage <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ right: '100%'}))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ right: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('HomePage <=> TodosPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ opacity: '0'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: '0'}))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: '1'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
  ]);