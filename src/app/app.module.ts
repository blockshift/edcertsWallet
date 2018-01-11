import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {AtScrollbarModule} from '@atomic/core';
import {RoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardsModule} from './pages/dashboards/dashboards.module';
import {AppsModule} from './pages/apps/apps.module';
//import {ComponentsModule} from './pages/components/components.module';
import {AtomicLayoutsModule} from './pages/atomic-layouts/atomic-layouts.module';
import {UiModule} from './pages/ui/ui.module';
import {ChartsModule} from './pages/charts/charts.module';
import {MapsModule} from './pages/maps/maps.module';
//import {TablesModule} from './pages/tables/tables.module';
import {PagesModule} from './pages/pages/pages.module';
import {CalendarModule} from 'angular-calendar';
import {CoreModule} from './core/core.module';
//import { CookieModule, CookieService } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
    declarations: [
        AppComponent,
    
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RoutingModule,
        CalendarModule.forRoot(),
        AtScrollbarModule.forRoot(),
        CoreModule,
        DashboardsModule,
        AppsModule,
       // ComponentsModule,
        //UiModule,
        //AtomicLayoutsModule,
        //ChartsModule,
      //  MapsModule,
        //TablesModule,
        PagesModule,
       // CookieModule.forRoot(),
        HttpClientModule
    ],
    exports: [],
    providers: [AuthGuard, AuthService, CookieService ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor( public auth :  AuthService ){

    }
}
