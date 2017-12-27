import {Injectable, ViewContainerRef, Provider, SkipSelf, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, ComponentType} from '@angular/material';

import {AtAlertDialogComponent} from './at-alert/at-alert.component';
import {AtConfirmDialogComponent} from './at-confirm/at-confirm.component';
import {AtPromptDialogComponent} from './at-prompt/at-prompt.component';

/**
 * @typedef {object} IDialogConfig
 * @property {string} title
 * @property {string} message
 * @property {viewContainerRef} viewContainerRef
 * @property {boolean} disableClose
 */
export interface IDialogConfig {
    title?: string;
    message: string;
    viewContainerRef?: ViewContainerRef;
    disableClose?: boolean;
}

/**
 * @typedef {object} IAlertConfig
 * @property {string} title
 * @property {string} message
 * @property {viewContainerRef} viewContainerRef
 * @property {boolean} disableClose
 * @property {string} closeButton
 */
export interface IAlertConfig extends IDialogConfig {
    closeButton?: string;
}

/**
 * @typedef {object} IConfirmConfig
 * @property {string} title
 * @property {string} message
 * @property {viewContainerRef} viewContainerRef
 * @property {boolean} disableClose
 * @property {string} acceptButton
 * @property {string} cancelButton
 */
export interface IConfirmConfig extends IDialogConfig {
    acceptButton?: string;
    cancelButton?: string;
}


/**
 * @typedef {object} IPromptConfig
 * @property {string} title
 * @property {string} message
 * @property {viewContainerRef} viewContainerRef
 * @property {boolean} disableClose
 * @property {string} acceptButton
 * @property {string} cancelButton
 * @property {string} value
 */
export interface IPromptConfig extends IConfirmConfig {
    value?: string;
}

@Injectable()
export class AtDialogService {

    constructor(private _dialogService: MdDialog) {
    }

    /**
     * Wrapper function over the open() method in MdDialog.
     * Opens a modal dialog containing the given component.
     *
     * @param {ComponentType<T>} component
     * @param {MdDialogConfig} config
     *
     * @returns {MdDialogRef<T>} MdDialogRef object
     */
    public open<T>(component: ComponentType<T>, config?: MdDialogConfig): MdDialogRef<T> {
        return this._dialogService.open(component, config);
    }

    /**
     * Wrapper function over the closeAll() method in MdDialog.
     * Closes all of the currently-open dialogs.
     */
    public closeAll(): void {
        this._dialogService.closeAll();
    }

    /**
     * Opens an alert dialog with the provided config.
     *
     * @param {IAlertConfig} config - IAlertConfig object
     *
     * @returns {MdDialogRef<AtAlertDialogComponent>} MdDialogRef object
     */
    public openAlert(config: IAlertConfig): MdDialogRef<AtAlertDialogComponent> {
        let dialogConfig: MdDialogConfig = this._createConfig(config);
        let dialogRef: MdDialogRef<AtAlertDialogComponent> =
            this._dialogService.open(AtAlertDialogComponent, dialogConfig);
        let alertDialogComponent: AtAlertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    }

    /**
     * Opens a confirm dialog with the provided config.
     *
     * @param {IConfirmConfig} config - IConfirmConfig object
     *
     * @returns {MdDialogRef<AtConfirmDialogComponent>}
     */
    public openConfirm(config: IConfirmConfig): MdDialogRef<AtConfirmDialogComponent> {
        let dialogConfig: MdDialogConfig = this._createConfig(config);
        let dialogRef: MdDialogRef<AtConfirmDialogComponent> =
            this._dialogService.open(AtConfirmDialogComponent, dialogConfig);
        let confirmDialogComponent: AtConfirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    }

    /**
     * Opens a prompt dialog with the provided config.
     *
     * @param {IPromptConfig} config - IPromptConfig object
     *
     * @returns {MdDialogRef<AtPromptDialogComponent>}
     */
    public openPrompt(config: IPromptConfig): MdDialogRef<AtPromptDialogComponent> {
        let dialogConfig: MdDialogConfig = this._createConfig(config);
        let dialogRef: MdDialogRef<AtPromptDialogComponent> =
            this._dialogService.open(AtPromptDialogComponent, dialogConfig);
        let promptDialogComponent: AtPromptDialogComponent = dialogRef.componentInstance;
        promptDialogComponent.title = config.title;
        promptDialogComponent.message = config.message;
        promptDialogComponent.value = config.value;
        if (config.acceptButton) {
            promptDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            promptDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    }

    private _createConfig(config: MdDialogConfig): MdDialogConfig {
        let dialogConfig: MdDialogConfig = new MdDialogConfig();
        dialogConfig.viewContainerRef = config.viewContainerRef;
        dialogConfig.disableClose = config.disableClose;
        return dialogConfig;
    }

}

export function DIALOG_PROVIDER_FACTORY(parent: AtDialogService, dialog: MdDialog): AtDialogService {
    return parent || new AtDialogService(dialog);
}

export const DIALOG_PROVIDER: Provider = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: AtDialogService,
    deps: [[new Optional(), new SkipSelf(), AtDialogService], MdDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};
