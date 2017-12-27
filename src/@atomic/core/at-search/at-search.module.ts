import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MdInputModule, MdIconModule, MdButtonModule} from '@angular/material';

import {AtSearchInputComponent} from './at-search-input/at-search-input.component';
import {AtSearchBoxComponent} from './at-search-box/at-search-box.component';
import {FlexLayoutModule} from '@angular/flex-layout';

export {AtSearchBoxComponent} from './at-search-box/at-search-box.component';
export {AtSearchInputComponent} from './at-search-input/at-search-input.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        FlexLayoutModule,
        MdInputModule,
        MdIconModule,
        MdButtonModule,
    ],
    declarations: [
        AtSearchInputComponent,
        AtSearchBoxComponent,
    ],
    exports: [
        AtSearchInputComponent,
        AtSearchBoxComponent,
    ],
})
export class AtSearchModule {

}
