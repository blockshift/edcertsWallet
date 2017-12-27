import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {SidepanelComponent} from './sidepanel.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        SidepanelComponent
    ],
    exports: [
        SidepanelComponent
    ],
    providers: [
        MdIconRegistry
    ],
})
export class SidepanelModule {
}
