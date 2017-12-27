import {NgModule} from '@angular/core';
import {AtScrollbarModule, AtIconModule} from '@atomic/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {AtLayoutModule} from "../../../@atomic/core/at-layout/at-layout.module";
import {FEATURE_COMPONENTS, FeatureRoutingModule} from "./feature-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtLayoutModule,
        AtScrollbarModule,
        AtIconModule,
        FeatureRoutingModule
    ],
    declarations: [
        FEATURE_COMPONENTS,
    ],
    exports: [
        FEATURE_COMPONENTS,
    ],
    providers: [],
})
export class FeatureModule {
}