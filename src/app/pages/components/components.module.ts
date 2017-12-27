import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {CovalentHighlightModule} from '@covalent/highlight';
import {
    AtIconModule,
    AtLayoutModule,
    AtLoadingModule,
    AtFavoritesModule,
    AtBreadcrumbModule,
    AtMediaModule,
    AtDialogsModule,
    AtNotificationsModule,
    AtSearchModule,
    AtChipsModule,
    AtStepsModule,
    AtPagingModule,
    AtDataTableModule,
    AtFormModule
} from '@atomic/core';
import {COMPONENTS_COMPONENTS, ComponentsRoutingModule} from './components-routing.module';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        FormsModule,
        CovalentHighlightModule,
        AtLayoutModule,
        AtMediaModule,
        AtIconModule,
        AtLoadingModule,
        AtFavoritesModule,
        AtBreadcrumbModule,
        AtDialogsModule,
        AtNotificationsModule,
        AtSearchModule,
        AtChipsModule,
        AtStepsModule,
        AtPagingModule,
        AtDataTableModule,
        AtFormModule,
        ComponentsRoutingModule
    ],
    declarations: [
        COMPONENTS_COMPONENTS,
    ],
    exports: [
        COMPONENTS_COMPONENTS,
    ],
    providers: [],
})
export class ComponentsModule {
}