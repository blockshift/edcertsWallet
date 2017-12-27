import {Type} from '@angular/core';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '@angular/cdk';
import {MdProgressBarModule, MdProgressSpinnerModule, OverlayModule} from '@angular/material';
import {AtLoadingService, LOADING_PROVIDER} from './at-loading.service';
import {AtLoadingFactory, LOADING_FACTORY_PROVIDER} from './at-loading.factory';
import {AtLoadingDirective} from './at-loading.directive';
import {AtLoadingComponent} from './at-loading.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const AT_LOADING: Type<any>[] = [
    AtLoadingComponent,
    AtLoadingDirective,
];

const AT_LOADING_ENTRY_COMPONENTS: Type<any>[] = [
    AtLoadingComponent,
];

export {LoadingType, LoadingMode, LoadingStrategy} from './at-loading.component';
export {AtLoadingService, IAtLoadingConfig} from './at-loading.service';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        OverlayModule,
        PortalModule,
    ],
    declarations: [
        AT_LOADING,
    ],
    exports: [
        AT_LOADING,
    ],
    providers: [
        LOADING_FACTORY_PROVIDER,
        LOADING_PROVIDER,
    ],
    entryComponents: [
        AT_LOADING_ENTRY_COMPONENTS,
    ],
})
export class AtLoadingModule {

}
