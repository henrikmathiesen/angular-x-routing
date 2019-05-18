import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    templateUrl: './animation.component.html',
    // https://angular.io/guide/animations
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'gold'
            })),
            state('closed', style({
                height: '50px',
                opacity: 0.25,
                backgroundColor: 'gold'
            })),
            transition('open => closed', [
                animate('0.25s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ])
        ])
    ]
})
export class AnimationComponent {
    pageTitle = 'Animation';
    isOpen = false;

    toggleAnimation() {
        this.isOpen = !this.isOpen;
    }
}

/*

animations: [
        trigger('pulse', [
            transition(':enter', [
                animate(
                    500,
                    keyframes([
                        style({ transform: 'scale3d(1.0, 1.0, 1.0)', offset: 0 }),
                        style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                        style({ transform: 'scale3d(1.0, 1.0, 1.0)', offset: 1 })
                    ])
                )
            ])
        ])
    ]


	<div class="row" [@pulse]></div>

*/
