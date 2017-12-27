import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import {
    AtScrollbarModule,
    AtBreadcrumbModule,
    AtSidenavModule,
    AtSidenavCollapsibleDirective
} from '@atomic/core';

import {SidenavComponent} from './sidenav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        AtScrollbarModule,
        AtSidenavModule.forRoot(),
        AtBreadcrumbModule
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        AtSidenavCollapsibleDirective,
        SidenavComponent
    ]
})
export class SidenavModule {
}
