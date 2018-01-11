import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPassComponent} from './forgot-pass/forgot-pass.component';

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pages/forgot-pass',
    },
    // {
    //     path: 'pages/login',
    //     component: LoginComponent,
    // },
    // {
    //     path: 'pages/register',
    //     component: RegisterComponent,
    // },
    {
        path: 'pages/forgot-pass',
        component: ForgotPassComponent,
    },
];

export const PAGES_COMPONENTS = [
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class PagesRoutingModule {

}
