import {Type} from '@angular/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdDialogModule, MdInputModule, MdButtonModule} from '@angular/material';
import {
    AtDialogComponent, AtDialogTitleDirective,
    AtDialogActionsDirective, AtDialogContentDirective
} from './at-dialog.component';
import {AtAlertDialogComponent} from './at-alert/at-alert.component';
import {AtConfirmDialogComponent} from './at-confirm/at-confirm.component';
import {AtPromptDialogComponent} from './at-prompt/at-prompt.component';
import {AtDialogService, DIALOG_PROVIDER} from './at-dialog.service';
import {FlexLayoutModule} from '@angular/flex-layout';

const AT_DIALOGS: Type<any>[] = [
    AtAlertDialogComponent,
    AtConfirmDialogComponent,
    AtPromptDialogComponent,
    AtDialogComponent,
    AtDialogTitleDirective,
    AtDialogActionsDirective,
    AtDialogContentDirective,
];

const AT_DIALOGS_ENTRY_COMPONENTS: Type<any>[] = [
    AtAlertDialogComponent,
    AtConfirmDialogComponent,
    AtPromptDialogComponent,
];

export {IAlertConfig, IConfirmConfig, IPromptConfig} from './at-dialog.service';
export {
    AtDialogService, AtDialogComponent, AtDialogTitleDirective,
    AtAlertDialogComponent, AtConfirmDialogComponent, AtPromptDialogComponent
};

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MdDialogModule,
        MdInputModule,
        MdButtonModule,
        FlexLayoutModule,
    ],
    declarations: [
        AT_DIALOGS,
    ],
    exports: [
        AT_DIALOGS,
    ],
    providers: [
        DIALOG_PROVIDER,
    ],
    entryComponents: [
        AT_DIALOGS_ENTRY_COMPONENTS,
    ],
})
export class AtDialogsModule {

}
