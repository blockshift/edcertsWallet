import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {MailComponent} from './mail/mail.component';
import { IdcardComponent } from 'app/pages/apps/idcard/idcard.component';
import { EnrollmentcardComponent } from 'app/pages/apps/enrollmentcard/enrollmentcard.component';
import { LibrarycardComponent } from 'app/pages/apps/librarycard/librarycard.component';
import { EnrollmentcardverificationComponent } from 'app/pages/apps/enrollmentcardverification/enrollmentcardverification.component'

export const APPS_ROUTES: Routes = [
    {
        path: 'apps',
        pathMatch: 'full',
       redirectTo: 'apps/calendar',
    },
{
    path : 'apps/idcard' ,
    component : IdcardComponent,
    data :{

        atSidenavItem: {
            name: 'View Student Card',
            icon: 'event',
            position: 1,
            customClass: '',
        }

}

},
{
    path : 'apps/enrollmentcard' ,
    component : EnrollmentcardComponent,
    data :{

        atSidenavItem: {
            name: 'View Enrollment Card',
            icon: 'event',
            position: 1,
            customClass: '',
        }

}


},
{
path : 'apps/librarycard' ,
    component : LibrarycardComponent,
    data :{

        atSidenavItem: {
            name: 'View Library Card',
            icon: 'event',
            position: 1,
            customClass: '',
        }

}
},

{
    path : 'apps/enrollmentcardverification' ,
    component : EnrollmentcardverificationComponent,
    data :{

        atSidenavItem: {
            name: 'Validate Enrollment Card',
            icon: 'event',
            position: 1,
            customClass: '',
        }


},
}
    
];

export const APPS_COMPONENTS = [
    CalendarComponent,
    MailComponent,
    IdcardComponent,
    LibrarycardComponent,
    EnrollmentcardComponent,
    EnrollmentcardverificationComponent
];

@NgModule({
    imports: [RouterModule.forChild(APPS_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class AppsRoutingModule {

}
