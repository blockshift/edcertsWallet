import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {MailComponent} from './mail/mail.component';

export const APPS_ROUTES: Routes = [
    {
        path: 'apps',
        pathMatch: 'full',
        redirectTo: 'apps/calendar',
    },
    {
        path: 'apps/calendar',
        component: CalendarComponent,
        data: {
            atSidenavItem: {
                name: 'Calendar',
                icon: 'event',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'apps/mail',
        component: MailComponent,
        data: {
            atSidenavItem: {
                name: 'Mail',
                icon: 'mail',
                position: 1,
                customClass: '',
            }
        },
    },
];

export const APPS_COMPONENTS = [
    CalendarComponent,
    MailComponent,
];

@NgModule({
    imports: [RouterModule.forChild(APPS_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class AppsRoutingModule {

}
