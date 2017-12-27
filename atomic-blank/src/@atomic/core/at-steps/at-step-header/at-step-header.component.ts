import { Component, Input } from '@angular/core';

import { ICanDisable, mixinDisabled, ICanDisableRipple, mixinDisableRipple } from '../../at-common/at-common.module';

import { StepState } from '../at-step.component';

export class AtStepHeaderBase {}

/* tslint:disable-next-line */
export const _AtStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(AtStepHeaderBase));

@Component({
  selector: 'at-step-header',
  inputs: ['disabled', 'disableRipple'],
  styleUrls: ['./at-step-header.component.scss' ],
  templateUrl: './at-step-header.component.html',
})
export class AtStepHeaderComponent extends _AtStepHeaderMixinBase implements ICanDisable, ICanDisableRipple {

  /**
   * Number assigned to [AtStepHeaderComponent].
   */
  @Input('number') number: number;

  /**
   * active?: boolean
   * Sets for active/inactive states on header.
   */
  @Input('active') active: boolean;

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets styles for state of header.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state') state: StepState = StepState.None;

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this.state === StepState.Complete;
  }

  /**
   * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
   */
  isRequired(): boolean {
    return this.state === StepState.Required;
  }
}
