import {ModuleWithProviders, NgModule} from '@angular/core';
import {AtCommonModule} from '../at-common/at-common.module';
import {AtMediaReplayService} from '../at-common/services/mediareplay/media-replay.service';
import {AtBreadcrumbModule} from '../at-breadcrumb/at-breadcrumb.module';
import {AtSidenavItemComponent} from './at-sidenav-item/at-sidenav-item.component';
import {AtSidenavCollapsibleDirective} from './at-sidenav-collapsed.directive';
import {AtSidenavService} from './at-sidenav.service';
import {AtSidenavItem} from './at-sidenav-item/at-sidenav-item.model';
import {AtPermissionsModule} from '../at-permissions/at-permissions.module';

export {AtSidenavItem, AtSidenavService};

@NgModule({
    imports: [
        AtCommonModule,
        AtBreadcrumbModule,
        AtPermissionsModule
    ],
    declarations: [
        AtSidenavCollapsibleDirective,
        AtSidenavItemComponent
    ],
    exports: [
        AtSidenavCollapsibleDirective,
        AtSidenavItemComponent,
    ]
})
export class AtSidenavModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AtSidenavModule,
            providers: [
                AtMediaReplayService,
                AtSidenavService
            ],
        };
    }
}
export {AtSidenavCollapsibleDirective}
