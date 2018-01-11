import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {CrmComponent} from './crm/crm.component';
import { DashboardsComponent } from 'app/pages/dashboards/dashboards.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'dashboard',
        pathMatch: 'full',
       
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardsComponent,
        data: {  
            atSidenavItem: {
                name: 'Dashboard',
                icon: 'dashboard',
                position: 1,
                //customClass: '',
            }
        },
    },

    
    


];

export const DASHBOARD_COMPONENTS = [
   // CrmComponent,
    DashboardsComponent
];

@NgModule({
    imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class DashboardRoutingModule {

}
