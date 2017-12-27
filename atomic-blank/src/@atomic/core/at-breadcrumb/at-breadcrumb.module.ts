import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import {AtBreadcrumbService} from './at-breadcrumb.service';
import {AtBreadcrumbsComponent} from './at-breadcrumb.component';

export {AtBreadcrumbService} from './at-breadcrumb.service';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    declarations: [
        AtBreadcrumbsComponent
    ],
    exports: [
        AtBreadcrumbsComponent
    ],
    providers: [
        AtBreadcrumbService
    ],
})
export class AtBreadcrumbModule {
}
