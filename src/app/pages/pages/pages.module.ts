import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PAGES_COMPONENTS, PagesRoutingModule} from './pages-routing.module';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        PagesRoutingModule
    ],
    declarations: [
        PAGES_COMPONENTS,
    ],
    exports: [
        PAGES_COMPONENTS,
    ],
    providers: [],
})
export class PagesModule {
}