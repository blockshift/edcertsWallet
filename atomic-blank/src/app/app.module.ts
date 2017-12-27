import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FeatureModule} from './pages/feature/feature.module';
import {AtScrollbarModule} from "../@atomic/core/at-scrollbar/at-scrollbar.module";
import {CalendarModule} from "angular-calendar";
import {CoreModule} from "./core/core.module";
import {PagesModule} from "./pages/pages/pages.module";


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
        FeatureModule,
        PagesModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
