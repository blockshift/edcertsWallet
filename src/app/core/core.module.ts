import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule, MdIconRegistry} from '@angular/material';
import {ToolbarModule} from './toolbar/toolbar.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {SettingsModule} from './settings/settings.module';
import {CoreComponent} from './core.component';
import {AtCommonModule, AtMediaModule, AtLayoutModule} from '@atomic/core';
import {MdIconsService} from './shared/md-icons';
import {DashboardsModule} from "../pages/dashboards/dashboards.module";
import {AppsModule} from "../pages/apps/apps.module";
import {ComponentsModule} from "../pages/components/components.module";
import {AtomicLayoutsModule} from "../pages/atomic-layouts/atomic-layouts.module";
import {ChartsModule} from "../pages/charts/charts.module";
import {MapsModule} from "../pages/maps/maps.module";
import {TablesModule} from "../pages/tables/tables.module";
import {PagesModule} from "../pages/pages/pages.module";
import {UiModule} from "../pages/ui/ui.module";

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
        SettingsModule,
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
