import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdIconModule, MdButtonModule} from '@angular/material';
import {AtPagingBarComponent} from './at-paging-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';

export {AtPagingBarComponent, IPageChangeEvent} from './at-paging-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MdIconModule,
        MdButtonModule,
    ],
    declarations: [
        AtPagingBarComponent,
    ],
    exports: [
        AtPagingBarComponent,
    ],
})
export class AtPagingModule {

}
