import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../../environments/environment';
import {AtMediaModule, AtLayoutModule} from "@atomic/core";
import {MAPS_COMPONENTS, MapsRoutingModule} from './maps-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsApiKey
        }),
        MapsRoutingModule
    ],
    declarations: [
        MAPS_COMPONENTS,
    ],
    exports: [
        MAPS_COMPONENTS,
    ],
    providers: [],
})
export class MapsModule {
}