import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtomicDatatableComponent} from './aviator-datatable/aviator-datatable.component';
import {NgxDatatableComponent} from './ngx-datatable/ngx-datatable.component';

export const TABLES_ROUTES: Routes = [
    {
        path: 'tables',
        pathMatch: 'full',
        redirectTo: 'tables/material-datatable',
        data: {
            atSidenavItem: {
                name: 'Tables',
                icon: 'border_all',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'tables/aviator-datatable',
        component: AtomicDatatableComponent,
        data: {
            atSidenavItem: {
                name: 'Atomic Datatable',
                position: 1,
            }
        }
    },
    {
        path: 'tables/ngx-datatable',
        component: NgxDatatableComponent,
        data: {
            atSidenavItem: {
                name: 'Ngx Datatable',
                position: 1,
            }
        }
    },
];

export const TABLES_COMPONENTS = [
    AtomicDatatableComponent,
    NgxDatatableComponent
];

@NgModule({
    imports: [RouterModule.forChild(TABLES_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class TablesRoutingModule {

}
