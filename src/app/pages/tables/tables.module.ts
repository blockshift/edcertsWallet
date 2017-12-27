import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AtDataTableModule, AtSearchModule, AtPagingModule, AtMediaModule, AtLayoutModule} from '@atomic/core';
import {NutritionService} from '../../core/shared/nutrition';
import {TABLES_COMPONENTS, TablesRoutingModule} from './tables-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        FormsModule,
        AtSearchModule,
        AtPagingModule,
        AtDataTableModule,
        NgxDatatableModule,
        TablesRoutingModule
    ],
    declarations: [
        TABLES_COMPONENTS,
    ],
    exports: [
        TABLES_COMPONENTS,
    ],
    providers: [
        NutritionService
    ],
})
export class TablesModule {
}