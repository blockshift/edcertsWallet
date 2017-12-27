import {NgModule} from '@angular/core';
import {AtIconComponent} from './at-icon.component';
import {AtCommonModule} from '../at-common/at-common.module';

@NgModule({
    imports: [
        AtCommonModule
    ],
    declarations: [
        AtIconComponent
    ],
    exports: [
        AtIconComponent
    ],
    entryComponents: [
        AtIconComponent,
    ],
})
export class AtIconModule {
}
