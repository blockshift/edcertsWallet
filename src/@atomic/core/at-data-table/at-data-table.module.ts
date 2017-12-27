import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MdCheckboxModule, MdTooltipModule, MdIconModule, MdSelectionModule} from '@angular/material';

import {AtDataTableComponent} from './at-data-table.component';
import {AtDataTableColumnComponent} from './at-data-table-column/at-data-table-column.component';
import {AtDataTableCellComponent} from './at-data-table-cell/at-data-table-cell.component';
import {AtDataTableRowComponent} from './at-data-table-row/at-data-table-row.component';
import {AtDataTableTableComponent} from './at-data-table-table/at-data-table-table.component';
import {AtDataTableTemplateDirective} from './at-data-table-directives/at-data-table-template.directive';

import {AtDataTableService, DATA_TABLE_PROVIDER} from './at-data-table.service';

const AT_DATA_TABLE: Type<any>[] = [
    AtDataTableComponent,
    AtDataTableTemplateDirective,

    AtDataTableColumnComponent,
    AtDataTableCellComponent,
    AtDataTableRowComponent,
    AtDataTableTableComponent,
];

export {
    AtDataTableComponent, AtDataTableSortingOrder, IAtDataTableRowClickEvent,
    IAtDataTableColumn, IAtDataTableSelectEvent, IAtDataTableSelectAllEvent
} from './at-data-table.component';
export {AtDataTableService} from './at-data-table.service';
export {
    AtDataTableColumnComponent,
    IAtDataTableSortChangeEvent
} from './at-data-table-column/at-data-table-column.component';
export {AtDataTableCellComponent} from './at-data-table-cell/at-data-table-cell.component';
export {AtDataTableRowComponent} from './at-data-table-row/at-data-table-row.component';
export {AtDataTableTableComponent} from './at-data-table-table/at-data-table-table.component';

@NgModule({
    imports: [
        CommonModule,
        MdCheckboxModule,
        MdTooltipModule,
        MdIconModule,
        MdSelectionModule
    ],
    declarations: [
        AT_DATA_TABLE,
    ],
    exports: [
        AT_DATA_TABLE,
    ],
    providers: [
        DATA_TABLE_PROVIDER,
    ],
})
export class AtDataTableModule {

}
