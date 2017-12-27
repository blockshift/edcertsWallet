import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

/**
 * Function AtFadeInOutAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [@atFadeInOut]="true|false"
 */
export function AtFadeInOutAnimation(duration: number = 150): AnimationTriggerMetadata {
  return trigger('atFadeInOut', [
    state('0', style({
      opacity: '0',
      display: 'none',
    })),
    state('1',  style({
      opacity: '*',
      display: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}

/**
 * Function AtFadeInOutAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [@atFadeInOut]="true|false"
 */
export function AtFadeOpacityAnimation(duration: number = 150): AnimationTriggerMetadata {
  return trigger('atFadeInOut', [
    state('0', style({
      opacity: '0',
    })),
    state('1',  style({
      opacity: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}
