import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

/**
 * Function AtFadeOpacityAnimation
 * @param {number} duration Duration of animation in miliseconds. Defaults to 200 ms.
 * @returns {AnimationTriggerMetadata} with states for a fading animation
 * @usage [@atFadeOpacity]="true|false"
 */
export function AtFadeOpacityAnimation(duration: number = 200): AnimationTriggerMetadata {
  return trigger('atFadeOpacity', [
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
