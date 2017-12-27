import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoogleMapsComponent} from './google-maps/google-maps.component';

export const MAPS_ROUTES: Routes = [
    {
        path: 'maps',
        pathMatch: 'full',
        data: {
            atSidenavItem: {
                name: 'Maps',
                icon: 'public',
                position: 1,
            }
        },
        redirectTo: 'maps/google-maps',
    },
    {
        path: 'maps/google-maps',
        component: GoogleMapsComponent,
        data: {
            atSidenavItem: {
                name: 'Google Maps',
                position: 1,
            }
        }
    },
];

export const MAPS_COMPONENTS = [
    GoogleMapsComponent,
];

@NgModule({
    imports: [RouterModule.forChild(MAPS_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class MapsRoutingModule {

}
