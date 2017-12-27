import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {AtSidenavModule, AtFavoritesModule, AtBreadcrumbModule, AtSearchModule, AtIconModule, AtNotificationsModule} from '@atomic/core';
import {ToolbarComponent} from './toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        AtSidenavModule,
        AtBreadcrumbModule,
        AtIconModule,
        AtNotificationsModule,
        AtFavoritesModule,
        AtSearchModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
    providers: [
        MdIconRegistry
    ],
})
export class ToolbarModule {
}
