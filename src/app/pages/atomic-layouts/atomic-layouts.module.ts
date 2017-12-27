import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {AtLayoutModule, AtScrollbarModule, AtMediaModule} from '@atomic/core';
import {ATLAYOUT_COMPONENTS, AtomicLayoutsRoutingModule} from './atomic-layouts-routing.module';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule,
        FormsModule,
        AtLayoutModule,
        AtScrollbarModule,
        AtomicLayoutsRoutingModule
    ],
    declarations: [
        ATLAYOUT_COMPONENTS,
    ],
    exports: [
        ATLAYOUT_COMPONENTS,
    ],
    providers: [],
})
export class AtomicLayoutsModule {
}