import {NgModule} from '@angular/core';
import {CovalentHighlightModule} from "@covalent/highlight";
import {AtLayoutModule, AtSearchModule, AtScrollbarModule} from '@atomic/core';
import {CoreModule} from '../../core/core.module';
import {UI_COMPONENTS, UiRoutingModule} from './ui-routing.module';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {AtMediaModule} from "@atomic/core";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        AtLayoutModule,
        AtSearchModule,
        AtScrollbarModule,
        CovalentHighlightModule,
        UiRoutingModule
    ],
    declarations: [
        UI_COMPONENTS,
    ],
    exports: [
        UI_COMPONENTS,
    ],
    providers: [],
})
export class UiModule {
}