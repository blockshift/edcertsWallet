import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {CalendarModule} from 'angular-calendar';
import {AtScrollbarModule, AtSearchModule, AtPagingModule, AtMediaModule, AtLayoutModule} from '@atomic/core';
import {APPS_COMPONENTS, AppsRoutingModule} from './apps-routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        CalendarModule,
        AtPagingModule,
        AtScrollbarModule,
        AtSearchModule,
        AppsRoutingModule,

    ],
    declarations: [
        APPS_COMPONENTS,
    ],
    exports: [
        APPS_COMPONENTS,
    ],
    providers: [],
})
export class AppsModule {
}