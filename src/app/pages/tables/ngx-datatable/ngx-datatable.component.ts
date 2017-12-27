import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NutritionService} from '../../../core/shared/nutrition';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls: ['./ngx-datatable.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgxDatatableComponent implements OnInit {

    columns: any[] = [
        {name: 'Name'},
        {name: 'Type'},
        {name: 'Calories'},
        {name: 'Fat'},
        {name: 'Carbs'},
        {name: 'Protein'},
        {name: 'Sodium'},
        {name: 'Calcium'},
        {name: 'Iron'},
    ];

    data: any[];
    filteredData: any[];

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(private _nutritionService: NutritionService) {
        this.data = _nutritionService.getNutrients();
        this.filteredData = [...this.data];
    }

    search(event) {
        const val = event.toLowerCase();

        // filter our data
        const temp = this.filteredData.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.data = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    ngOnInit() {
    }
}
