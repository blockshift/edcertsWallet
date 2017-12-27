import { Component, Input } from '@angular/core';

import { StepState } from '../at-step.component';

import { AtCollapseAnimation } from '../../at-common/at-common.module';

@Component({
  selector: 'at-step-body',
  styleUrls: ['./at-step-body.component.scss' ],
  templateUrl: './at-step-body.component.html',
  animations: [
    AtCollapseAnimation(),
  ],
})
export class AtStepBodyComponent {

  /**
   * active?: boolean
   * Sets for active/inactive states on body.
   */
  @Input('active') active: boolean;

  /**
   * state?: StepState or ['none' | 'required' | 'complete']
   * Sets styles for state of body.
   * Defaults to [StepState.None | 'none'].
   */
  @Input('state') state: StepState = StepState.None;

  /**
   * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
   */
  isComplete(): boolean {
    return this.state === StepState.Complete;
  }
}
