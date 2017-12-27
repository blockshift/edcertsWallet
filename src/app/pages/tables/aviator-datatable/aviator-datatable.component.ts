import {Component, OnInit} from '@angular/core';
import {NutritionService} from '../../../core/shared/nutrition';
import {
    AtDataTableSortingOrder,
    IAtDataTableColumn,
    IPageChangeEvent,
    IAtDataTableSortChangeEvent,
    AtDataTableService,
    AtDialogService
} from '@atomic/core';


const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
    selector: 'app-aviator-datatable',
    templateUrl: './aviator-datatable.component.html',
})
export class AtomicDatatableComponent implements OnInit {

    // todo update to the last version

    columns: IAtDataTableColumn[] = [
        {name: 'name', label: 'Dessert (100g serving)', sortable: true},
        {name: 'type', label: 'Type', filter: true},
        {name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true, hidden: false},
        {name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT, sortable: true},
        {name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT},
        {name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT},
        {name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT},
        {name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT},
        {name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT},
    ];

    data: any[];
    basicData: any[];
    selectable: boolean = true;
    clickable: boolean = false;
    multiple: boolean = true;
    filterColumn: boolean = true;

    filteredData: any[];
    filteredTotal: number;
    selectedRows: any[] = [];

    searchTerm: string = '';
    fromRow: number = 1;
    currentPage: number = 1;
    pageSize: number = 10;
    sortBy: string = 'name';
    sortOrder: AtDataTableSortingOrder = AtDataTableSortingOrder.Descending;

    constructor(private _dataTableService: AtDataTableService,
                private _dialogService: AtDialogService,
                private _nutritionService: NutritionService) {
        this.data = _nutritionService.getNutrients();
        this.basicData = this.data.slice(0, 4);
        this.filteredData = this.data;
        this.filteredTotal = this.data.length;
    }

    ngOnInit(): void {
        this.filter();
    }

    sort(sortEvent: IAtDataTableSortChangeEvent): void {
        this.sortBy = sortEvent.name;
        this.sortOrder = sortEvent.order;
        this.filter();
    }

    search(searchTerm: string): void {
        this.searchTerm = searchTerm;
        this.filter();
    }

    page(pagingEvent: IPageChangeEvent): void {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    }

    filter(): void {
        let newData: any[] = this.data;
        let excludedColumns: string[] = this.columns
            .filter((column: IAtDataTableColumn) => {
                return ((column.filter === undefined && column.hidden === true) ||
                (column.filter !== undefined && column.filter === false));
            }).map((column: IAtDataTableColumn) => {
                return column.name;
            });
        newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
        this.filteredTotal = newData.length;
        newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
        newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
        this.filteredData = newData;
    }

    showAlert(event: any): void {
        this._dialogService.openAlert({
            message: 'You clicked on row: ' + event.row.name,
        });
    }
}