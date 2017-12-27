import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColorsComponent} from './colors/colors.component';
import {HelpersComponent} from './helpers/helpers.component';
import {IconsComponent} from './icons/icons.component';
import {TypographyComponent} from './typography/typography.component';
import {HelpersGeneralComponent} from './helpers/helpers-general/helpers-general.component';
import {HelpersPositionComponent} from './helpers/helpers-position/helpers-position.component';
import {HelpersSizeComponent} from './helpers/helpers-size/helpers-size.component';
import {HelpersTextComponent} from './helpers/helpers-text/helpers-text.component';
import {HelpersBorderComponent} from './helpers/helpers-border/helpers-border.component';

export const UI_ROUTES: Routes = [
    {
        path: 'ui',
        pathMatch: 'full',
        redirectTo: 'ui/colors',
        data: {
            atSidenavItem: {
                name: 'UI',
                icon: 'style',
                position: 1,
                customClass: '',
            }
        }
    },
    {
        path: 'ui/colors',
        component: ColorsComponent,
        data: {
            atSidenavItem: {
                name: 'Colors',
                position: 1,
            }
        }
    },
    {
        path: 'ui/helpers',
        component: HelpersComponent,
        data: {
            atSidenavItem: {
                name: 'Helpers',
                position: 1,
            }
        }
    },
    {
        path: 'ui/icons',
        component: IconsComponent,
        data: {
            atSidenavItem: {
                name: 'Icons',
                position: 1,
            }
        }
    },
    {
        path: 'ui/typography',
        component: TypographyComponent,
        data: {
            atSidenavItem: {
                name: 'Typography',
                position: 1,
            }
        }
    },
];

export const UI_COMPONENTS = [
    ColorsComponent,
    HelpersComponent,
    HelpersGeneralComponent,
    HelpersPositionComponent,
    HelpersSizeComponent,
    HelpersTextComponent,
    HelpersBorderComponent,
    IconsComponent,
    TypographyComponent,
];

@NgModule({
    imports: [RouterModule.forChild(UI_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class UiRoutingModule {

}
