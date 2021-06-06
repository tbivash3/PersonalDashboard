import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            background: 'wheat',
            display: 'block',
          }),
          animate(1000),
        ], { optional: true }),
        style({
          background: 'blue'
        }),
        animate(1000, style({
          background: 'violet'
        })),
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {

    if (outlet.isActivated)
      return outlet.activatedRoute.snapshot.url;

    return '';
  }
}
