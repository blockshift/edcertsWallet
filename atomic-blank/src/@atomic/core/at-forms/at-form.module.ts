import {NgModule} from '@angular/core';
import {AtFormFieldComponent} from './at-form-field/at-form-field.component';
import {AtCommonModule} from '../at-common/at-common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AtValidators} from './at-form-validators';
export {AtValidators}

@NgModule({
    imports: [
        AtCommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AtFormFieldComponent
    ],
    exports: [
        AtFormFieldComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
        AtFormFieldComponent,
    ],
})
export class AtFormModule {
}
