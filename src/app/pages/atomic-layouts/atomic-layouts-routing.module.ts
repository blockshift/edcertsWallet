import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutContentComponent} from './_content/content.component';
import {LayoutContentSidenavComponent} from './_content-sidenav/content-sidenav.component';
import {LayoutSimple1Component} from './simple1/simple1.component';
import {LayoutSimple2Component} from './simple2/simple2.component';
import {LayoutSimple3Component} from './simple3/simple3.component';
import {LayoutCarded1Component} from './carded1/carded1.component';
import {LayoutCarded2Component} from './carded2/carded2.component';
import {LayoutCarded3Component} from './carded3/carded3.component';
import {LayoutCarded4Component} from './carded4/carded4.component';
import {LayoutCarded5Component} from './carded5/carded5.component';
import {LayoutCarded6Component} from "./carded6/carded6.component";
import {LayoutSimple4Component} from "./simple4/simple4.component";
import {LayoutSimple5Component} from './simple5/simple5.component';
import {LayoutSimple6Component} from './simple6/simple6.component';
import {LayoutTabbed1Component} from './tabbed1/tabbed1.component';
import {LayoutTabbed2Component} from './tabbed2/tabbed2.component';
import {LayoutBlankComponent} from './blank/blank.component';

export const ATLAYOUT_ROUTES: Routes = [
    {
        path: 'aviator-layouts',
        pathMatch: 'full',
        redirectTo: 'aviator-layouts/simple',
        data: {
            atSidenavItem: {
                name: 'Layouts',
                icon: 'view_quilt',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'aviator-layouts/simple',
        pathMatch: 'full',
        redirectTo: 'aviator-layouts/simple/simple-1',
        data: {
            atSidenavItem: {
                name: 'Simple',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'aviator-layouts/simple/simple-1',
        component: LayoutSimple1Component,
        data: {
            atSidenavItem: {
                name: 'Demo (I)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/simple/simple-2',
        component: LayoutSimple2Component,
        data: {
            atSidenavItem: {
                name: 'Demo (II)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/simple/simple-3',
        component: LayoutSimple3Component,
        data: {
            atSidenavItem: {
                name: 'Demo (III)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/simple/simple-4',
        component: LayoutSimple4Component,
        data: {
            atSidenavItem: {
                name: 'Demo (IV)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/simple/simple-5',
        component: LayoutSimple5Component,
        data: {
            atSidenavItem: {
                name: 'Demo (V)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/simple/simple-6',
        component: LayoutSimple6Component,
        data: {
            atSidenavItem: {
                name: 'Demo (VI)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/carded',
        pathMatch: 'full',
        redirectTo: 'aviator-layouts/carded/carded-1',
        data: {
            atSidenavItem: {
                name: 'Carded',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'aviator-layouts/carded/carded-1',
        component: LayoutCarded1Component,
        data: {
            atSidenavItem: {
                name: 'Demo (I)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/carded/carded-2',
        component: LayoutCarded2Component,
        data: {
            atSidenavItem: {
                name: 'Demo (II)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/carded/carded-3',
        component: LayoutCarded3Component,
        data: {
            atSidenavItem: {
                name: 'Demo (III)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/carded/carded-4',
        component: LayoutCarded4Component,
        data: {
            atSidenavItem: {
                name: 'Demo (IV)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/carded/carded-5',
        component: LayoutCarded5Component,
        data: {
            atSidenavItem: {
                name: 'Demo (V)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/carded/carded-6',
        component: LayoutCarded6Component,
        data: {
            atSidenavItem: {
                name: 'Demo (VI)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/tabbed',
        pathMatch: 'full',
        redirectTo: 'aviator-layouts/tabbed/tabbed-1',
        data: {
            atSidenavItem: {
                name: 'Tabbed',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'aviator-layouts/tabbed/tabbed-1',
        component: LayoutTabbed1Component,
        data: {
            atSidenavItem: {
                name: 'Demo (I)',
                position: 1,
                customClass: '',
            }
        },
    },
    {
        path: 'aviator-layouts/tabbed/tabbed-2',
        component: LayoutTabbed2Component,
        data: {
            atSidenavItem: {
                name: 'Demo (II)',
                position: 1,
                customClass: '',
            }
        },
    },
];

export const ATLAYOUT_COMPONENTS = [
    LayoutContentComponent,
    LayoutContentSidenavComponent,
    LayoutSimple1Component,
    LayoutSimple2Component,
    LayoutSimple3Component,
    LayoutSimple4Component,
    LayoutSimple5Component,
    LayoutSimple6Component,
    LayoutCarded1Component,
    LayoutCarded2Component,
    LayoutCarded3Component,
    LayoutCarded4Component,
    LayoutCarded5Component,
    LayoutCarded6Component,
    LayoutTabbed1Component,
    LayoutTabbed2Component,
    LayoutBlankComponent
];

@NgModule({
    imports: [RouterModule.forChild(ATLAYOUT_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class AtomicLayoutsRoutingModule {

}
