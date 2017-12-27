import {
    Component, Directive, Input, Output, TemplateRef, ViewChild,
    ViewContainerRef, ContentChild, OnInit
} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {coerceBooleanProperty, TemplatePortalDirective, TemplatePortal} from '@angular/cdk';

import {ICanDisable, mixinDisabled, ICanDisableRipple, mixinDisableRipple} from '../at-common/at-common.module';

export enum StepState {
    None = <any>'none',
    Required = <any>'required',
    Complete = <any>'complete',
}

@Directive({
    selector: '[at-step-label]ng-template',
})
export class AtStepLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

@Directive({
    selector: '[at-step-actions]ng-template',
})
export class AtStepActionsDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

@Directive({
    selector: '[at-step-summary]ng-template',
})
export class AtStepSummaryDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

export class AtStepBase {
}

/* tslint:disable-next-line */
export const _AtStepMixinBase = mixinDisableRipple(mixinDisabled(AtStepBase));

@Component({
    selector: 'at-step',
    inputs: ['disabled', 'disableRipple'],
    templateUrl: './at-step.component.html',
})
export class AtStepComponent extends _AtStepMixinBase implements OnInit, ICanDisable, ICanDisableRipple {

    private _active: boolean = false;
    private _state: StepState = StepState.None;

    private _contentPortal: TemplatePortal;

    get stepContent(): TemplatePortal {
        return this._contentPortal;
    }

    @ViewChild(TemplateRef) _content: TemplateRef<any>;
    @ContentChild(AtStepLabelDirective) stepLabel: AtStepLabelDirective;
    @ContentChild(AtStepActionsDirective) stepActions: AtStepActionsDirective;
    @ContentChild(AtStepSummaryDirective) stepSummary: AtStepSummaryDirective;

    /**
     * label?: string
     * Sets label of [AtStepComponent] header.
     * Defaults to 'Step #'
     */
    @Input('label') label: string;

    /**
     * sublabel?: string
     * Sets sublabel of [AtStepComponent] header.
     */
    @Input('sublabel') sublabel: string;

    /**
     * active?: boolean
     * Toggles [AtStepComponent] between active/deactive.
     */
    @Input('active')
    set active(active: boolean) {
        this._setActive(coerceBooleanProperty(active));
    }

    get active(): boolean {
        return this._active;
    }

    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of [AtStepComponent] depending on value.
     * Defaults to [StepState.None | 'none'].
     */
    @Input('state')
    set state(state: StepState) {
        switch (state) {
            case StepState.Complete:
                this._state = StepState.Complete;
                break;
            case StepState.Required:
                this._state = StepState.Required;
                break;
            default:
                this._state = StepState.None;
                break;
        }
    }

    get state(): StepState {
        return this._state;
    }

    /**
     * activated?: function
     * Event emitted when [AtStepComponent] is activated.
     */
    @Output('activated') onActivated: EventEmitter<void> = new EventEmitter<void>();

    /**
     * deactivated?: function
     * Event emitted when [AtStepComponent] is deactivated.
     */
    @Output('deactivated') onDeactivated: EventEmitter<void> = new EventEmitter<void>();

    constructor(private _viewContainerRef: ViewContainerRef) {
        super();
    }

    ngOnInit(): void {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }

    /**
     * Toggle active state of [AtStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    toggle(): boolean {
        return this._setActive(!this._active);
    }

    /**
     * Opens [AtStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    open(): boolean {
        return this._setActive(true);
    }

    /**
     * Closes [AtStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    close(): boolean {
        return this._setActive(false);
    }

    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean {
        return this._state === StepState.Complete;
    }

    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    }

    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    private _setActive(newActive: boolean): boolean {
        if (this.disabled) {
            return false;
        }
        if (this._active !== newActive) {
            this._active = newActive;
            if (newActive) {
                this._onActivated();
            } else {
                this._onDeactivated();
            }
            return true;
        }
        return false;
    }

    private _onActivated(): void {
        this.onActivated.emit(undefined);
    }

    private _onDeactivated(): void {
        this.onDeactivated.emit(undefined);
    }
}
