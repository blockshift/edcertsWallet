import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AtMediaModule, AtLayoutModule} from "@atomic/core";
import {CHARTS_COMPONENTS, ChartsRoutingModule} from './charts-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        NgxChartsModule,
        ChartsRoutingModule
    ],
    declarations: [
        CHARTS_COMPONENTS,
    ],
    exports: [
        CHARTS_COMPONENTS,
    ],
    providers: [],
})
export class ChartsModule {
}