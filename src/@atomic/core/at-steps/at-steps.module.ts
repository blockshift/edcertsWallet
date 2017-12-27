import {Type} from '@angular/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '@angular/cdk';
import {MdIconModule, MdRippleModule, ScrollDispatchModule} from '@angular/material';
import {AtCommonModule} from '../at-common/at-common.module';

// Steps
import {AtStepsComponent} from './at-steps.component';
import {AtStepHeaderComponent} from './at-step-header/at-step-header.component';
import {AtStepBodyComponent} from './at-step-body/at-step-body.component';
import {
    AtStepComponent, AtStepLabelDirective, AtStepActionsDirective,
    AtStepSummaryDirective
} from './at-step.component';

const AT_STEPS: Type<any>[] = [
    AtStepsComponent,
    AtStepComponent,
    AtStepHeaderComponent,
    AtStepBodyComponent,
    AtStepLabelDirective,
    AtStepActionsDirective,
    AtStepSummaryDirective,
];

export {AtStepComponent, StepState} from './at-step.component';
export {AtStepsComponent, IStepChangeEvent, StepMode} from './at-steps.component';

@NgModule({
    imports: [
        CommonModule,
        MdIconModule,
        MdRippleModule,
        PortalModule,
        ScrollDispatchModule,
        AtCommonModule,
    ],
    declarations: [
        AT_STEPS,
    ],
    exports: [
        AT_STEPS,
    ],
})
export class AtStepsModule {

}
