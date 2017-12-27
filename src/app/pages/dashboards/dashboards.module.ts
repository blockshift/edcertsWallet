import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {AtScrollbarModule, AtIconModule, AtMediaModule, AtLayoutModule} from '@atomic/core';
import {DASHBOARD_COMPONENTS, DashboardRoutingModule} from './dashboards-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        AtScrollbarModule,
        AtIconModule,
        NgxChartsModule,
        DashboardRoutingModule
    ],
    declarations: [
        DASHBOARD_COMPONENTS,
    ],
    exports: [
        DASHBOARD_COMPONENTS,
    ],
    providers: [],
})
export class DashboardsModule {
}