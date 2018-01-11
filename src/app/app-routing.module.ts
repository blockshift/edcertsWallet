import { ForgotPassComponent } from './pages/pages/forgot-pass/forgot-pass.component';
import { AuthGuard } from './auth.guard';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {DASHBOARD_ROUTES} from './pages/dashboards/dashboards-routing.module';
//import {COMPONENTS_ROUTES} from './pages/components/components-routing.module';
//import {ATLAYOUT_ROUTES} from './pages/atomic-layouts/atomic-layouts-routing.module';
import {APPS_ROUTES} from './pages/apps/apps-routing.module';
//import {CHARTS_ROUTES} from './pages/charts/charts-routing.module';
//import {MAPS_ROUTES} from './pages/maps/maps-routing.module';
//import {TABLES_ROUTES} from './pages/tables/tables-routing.module';
//import {UI_ROUTES} from './pages/ui/ui-routing.module';
import { LoginComponent } from 'app/pages/pages/login/login.component';
import { RegisterComponent } from 'app/pages/pages/register/register.component';

const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent,
       
      },
      {
          path : 'register',
          component : RegisterComponent
      },
      {
          path : 'forgot-pass',
          component : ForgotPassComponent
      },
    {path: '',
    canActivate:[AuthGuard],
     redirectTo: 'dashboard',
      pathMatch: 'full'},
    {
        path: '',
    canActivate :[AuthGuard],
        component: CoreComponent,
        children: [
            ...DASHBOARD_ROUTES,
            ...APPS_ROUTES,
           // ...COMPONENTS_ROUTES,
           // ...UI_ROUTES,
           //...ATLAYOUT_ROUTES,
            //...CHARTS_ROUTES,
           // ...MAPS_ROUTES,
            //...TABLES_ROUTES,
        ]
    },
//{path: 'pages', loadChildren: './pages/pages/pages.module#PagesModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class RoutingModule {
}
