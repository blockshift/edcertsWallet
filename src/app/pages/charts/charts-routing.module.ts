import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxChartsComponent} from './ngx-charts/ngx-charts.component';

export const CHARTS_ROUTES: Routes = [
    {
        path: 'charts',
        pathMatch: 'full',
        redirectTo: 'charts/ngx-charts',
        data: {
            atSidenavItem: {
                name: 'Charts',
                icon: 'show_charts',
                position: 1,
            }
        }
    },
    {
        path: 'charts/ngx-charts',
        component: NgxChartsComponent,
        data: {
            atSidenavItem: {
                name: 'ngx-charts',
                position: 1,
            }
        }
    }
];

export const CHARTS_COMPONENTS = [
    NgxChartsComponent,
];

@NgModule({
    imports: [RouterModule.forChild(CHARTS_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class ChartsRoutingModule {

}
