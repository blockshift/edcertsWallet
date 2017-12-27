import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SortablejsModule} from 'angular-sortablejs/dist';
import {AtCommonModule} from '../at-common/at-common.module';
import {AtIconModule} from '../at-icon/at-icon.module';
import {AtFavoritesComponent} from './at-favorites.component';
import {AtScrollbarModule} from "../at-scrollbar/at-scrollbar.module";

// Todo Pending sizes.
@NgModule({
    imports: [
        AtCommonModule,
        FormsModule,
        SortablejsModule,
        AtIconModule,
        AtScrollbarModule
    ],
    declarations: [
        AtFavoritesComponent
    ],
    exports: [
        AtFavoritesComponent
    ],
    providers: [],
})
export class AtFavoritesModule {
}
