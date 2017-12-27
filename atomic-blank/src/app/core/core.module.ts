import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {ToolbarModule} from './toolbar/toolbar.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {CoreComponent} from './core.component';
import {AtCommonModule, AtMediaModule, AtLayoutModule} from '@atomic/core';
import {MdIconsService} from './shared/md-icons';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        AtCommonModule,
        AtMediaModule,
        AtLayoutModule,
        ToolbarModule,
        SidenavModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AtMediaModule,
        AtLayoutModule
    ],
    declarations: [
        CoreComponent,
    ],
    providers: [
        MdIconRegistry,
        MdIconsService
    ],
})
export class CoreModule {
}
