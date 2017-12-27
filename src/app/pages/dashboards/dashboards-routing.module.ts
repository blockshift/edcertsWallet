import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrmComponent} from './crm/crm.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'dashboards',
        pathMatch: 'full',
        redirectTo: 'dashboards/crm',
        data: {
            atSidenavItem: {
                name: 'Dashboards',
                icon: 'dashboard',
                position: 1,
                badge: 12,
                badgeColor: 'red',
                customClass: '',
            }
        }
    },
    {
        path: 'dashboards/crm',
        component: CrmComponent,
        data: {
            atSidenavItem: {
                name: 'CRM',
                position: 1,
                customClass: '',
            }
        },
    },
];

export const DASHBOARD_COMPONENTS = [
    CrmComponent
];

@NgModule({
    imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class DashboardRoutingModule {

}
