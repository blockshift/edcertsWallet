import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import {SettingsService} from './shared/settings';
import {SettingsComponent} from './settings.component';
import {AtScrollbarModule} from "@atomic/core";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        AtScrollbarModule,
        FormsModule
    ],
    declarations: [
        SettingsComponent,
    ],
    exports: [
        SettingsComponent
    ],
    providers: [
        SettingsService
    ],
})
export class SettingsModule {
}
