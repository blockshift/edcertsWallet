import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {CalendarModule} from 'angular-calendar';
import {AtScrollbarModule, AtSearchModule, AtPagingModule, AtMediaModule, AtLayoutModule} from '@atomic/core';
import {APPS_COMPONENTS, AppsRoutingModule} from './apps-routing.module';
import { EnrollmentcardverificationComponent } from './enrollmentcardverification/enrollmentcardverification.component';

import { AtFormModule } from '@atomic/core';
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
        AtFormModule
    ],
    declarations: [
        APPS_COMPONENTS,
        EnrollmentcardverificationComponent,
    ],
    exports: [
        APPS_COMPONENTS,
    ],
    providers: [],
})
export class AppsModule {
}