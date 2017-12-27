import {NgModule, ModuleWithProviders} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule} from '@angular/material';
import {AtChipsComponent, AtChipDirective, AtAutocompleteOptionDirective} from './at-chips.component';
export {AtChipsComponent, AtChipDirective, AtAutocompleteOptionDirective} from './at-chips.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MdInputModule,
        MdIconModule,
        MdChipsModule,
        MdAutocompleteModule,
        FlexLayoutModule
    ],
    declarations: [
        AtChipsComponent,
        AtChipDirective,
        AtAutocompleteOptionDirective,
    ],
    exports: [
        AtChipsComponent,
        AtChipDirective,
        AtAutocompleteOptionDirective,
    ],
})
export class AtChipsModule {

}
