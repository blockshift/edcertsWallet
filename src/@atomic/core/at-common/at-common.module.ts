import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';

/**
 * PIPES
 */
import {AtMultiColumnFilterPipe} from './pipes/multi-column-filter/multi-column-filter.pipe';
import {AtTruncatePipe} from './pipes/truncate/truncate.pipe';
import {AtKeysPipe} from './pipes/object/keys.pipe';

const AT_PIPES: Type<any>[] = [
    AtMultiColumnFilterPipe,
    AtTruncatePipe,
    AtKeysPipe
];

export {AtMultiColumnFilterPipe};

/**
 * ANIMATIONS
 */

import {AtToggleDirective} from './animations/toggle/toggle.directive';
import {AtFadeDirective} from './animations/fade/fade.directive';

const AT_ANIMATIONS: Type<any>[] = [
    AtToggleDirective,
    AtFadeDirective,
];

export {AtToggleDirective, AtFadeDirective};
export {AtCollapseAnimation} from './animations/collapse/collapse.animation';
export {AtFadeInOutAnimation} from './animations/fade/fadeInOut.animation';

/**
 * BEHAVIORS
 */
export {ICanDisable, mixinDisabled} from './behaviors/disabled.mixin';
export {ICanDisableRipple, mixinDisableRipple} from './behaviors/disable-ripple.mixin';

/**
 * SERVICES
 */
import {AtMediaReplayService} from './services/mediareplay/media-replay.service';
import {AtUtilService} from './services/util.service';


export {AtMediaReplayService};

@NgModule({
    imports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        // RouterModule,
        // CommonModule,
        // FlexLayoutModule,

        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    declarations: [
        AT_PIPES,
        AT_ANIMATIONS
    ],
    exports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        AT_PIPES,
        AT_ANIMATIONS
    ],
    providers: [
        AtMediaReplayService,
        AtUtilService
    ],
})
export class AtCommonModule {

}