import {trigger, state, style, transition, animate, AnimationTriggerMetadata, AUTO_STYLE} from '@angular/animations';

/**
 * Function AtCollapseAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 120 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a collapse/expand animation.
 *
 * usage: [@atCollapse]="true|false"
 */
export function AtCollapseAnimation(duration: number = 120): AnimationTriggerMetadata {
    return trigger('atCollapse', [
        state('1', style({
            height: '0',
            display: 'none',
        })),
        state('0', style({
            height: AUTO_STYLE,
            display: AUTO_STYLE,
        })),
        transition('0 => 1', [
            style({overflow: 'hidden'}),
            animate(duration + 'ms ease-in', style({height: '0'})),
        ]),
        transition('1 => 0', [
            style({overflow: 'hidden'}),
            animate(duration + 'ms ease-out', style({height: AUTO_STYLE})),
        ]),
    ]);
}
