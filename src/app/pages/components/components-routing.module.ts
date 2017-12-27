import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtomicIconComponent} from './atomic/atomic-icon/atomic-icon.component';
import {AtomicMediaComponent} from './atomic/atomic-media/atomic-media.component';
import {AtomicLayoutComponent} from './atomic/atomic-layout/atomic-layout.component';
import {AtomicBreadcrumbComponent} from './atomic/atomic-breadcrumb/atomic-breadcrumb.component';
import {AtomicFavoritesComponent} from './atomic/atomic-favorites/atomic-favorites.component';
import {AtomicSearchComponent} from './atomic/atomic-search/atomic-search.component';
import {AtomicLoadingComponent} from './atomic/atomic-loading/atomic-loading.component';
import {AtomicDialogComponent} from './atomic/atomic-dialog/atomic-dialog.component';
import {AtomicNotificationsComponent} from './atomic/atomic-notifications/atomic-notifications.component';
import {AtomicChipsComponent} from './atomic/atomic-chips/atomic-chips.component';
import {AtomicStepperComponent} from './atomic/atomic-stepper/atomic-stepper.component';
import {AtomicPagingComponent} from './atomic/atomic-paging/atomic-paging.component';
import {AtomicDatatableComponent} from './atomic/atomic-datatable/atomic-datatable.component';
import {AtomicFormsComponent} from './atomic/atomic-forms/atomic-forms.component';

export const COMPONENTS_ROUTES: Routes = [
    {
        path: 'at-components',
        pathMatch: 'full',
        redirectTo: 'at-components/at-layout',
        data: {
            atSidenavItem: {
                name: 'Atomic',
                icon: 'adjust',
                position: 1,
            }
        }
    },
    {
        path: 'at-components/at-layout',
        component: AtomicLayoutComponent,
        data: {
            atSidenavItem: {
                name: 'AtLayout',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-favorites',
        component: AtomicFavoritesComponent,
        data: {
            atSidenavItem: {
                name: 'AtFavorites',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-breadcrumb',
        component: AtomicBreadcrumbComponent,
        data: {
            atSidenavItem: {
                name: 'AtBreadcrumb',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-media',
        component: AtomicMediaComponent,
        data: {
            atSidenavItem: {
                name: 'AtMedia',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-loading',
        component: AtomicLoadingComponent,
        data: {
            atSidenavItem: {
                name: 'AtLoading',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-dialog',
        component: AtomicDialogComponent,
        data: {
            atSidenavItem: {
                name: 'AtDialog',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-notifications',
        component: AtomicNotificationsComponent,
        data: {
            atSidenavItem: {
                name: 'AtNotifications',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-icon',
        component: AtomicIconComponent,
        data: {
            atSidenavItem: {
                name: 'AtIcon',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-search',
        component: AtomicSearchComponent,
        data: {
            atSidenavItem: {
                name: 'AtSearch',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-chips',
        component: AtomicChipsComponent,
        data: {
            atSidenavItem: {
                name: 'AtChips',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-stepper',
        component: AtomicStepperComponent,
        data: {
            atSidenavItem: {
                name: 'AtSteps',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-paging',
        component: AtomicPagingComponent,
        data: {
            atSidenavItem: {
                name: 'AtPaging',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-datatable',
        component: AtomicDatatableComponent,
        data: {
            atSidenavItem: {
                name: 'AtDatatable',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'at-components/at-forms',
        component: AtomicFormsComponent,
        data: {
            atSidenavItem: {
                name: 'AtForm',
                position: 1,
                customClass: '',
            }
        },
    },

];

export const COMPONENTS_COMPONENTS = [
    AtomicFavoritesComponent,
    AtomicBreadcrumbComponent,
    AtomicMediaComponent,
    AtomicLayoutComponent,
    AtomicLoadingComponent,
    AtomicDialogComponent,
    AtomicNotificationsComponent,
    AtomicIconComponent,
    AtomicSearchComponent,
    AtomicChipsComponent,
    AtomicStepperComponent,
    AtomicPagingComponent,
    AtomicDatatableComponent,
    AtomicFormsComponent
];

@NgModule({
    imports: [RouterModule.forChild(COMPONENTS_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class ComponentsRoutingModule {

}
