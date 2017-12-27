import {Component, ChangeDetectorRef} from '@angular/core';
import {AnimationEvent} from '@angular/animations';
import {TemplatePortal} from '@angular/cdk';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AtFadeInOutAnimation} from '../at-common/animations/fade/fadeInOut.animation';
import {AtFadeOpacityAnimation} from '../at-common/animations/fade/fadeOpacity.animation';
import * as _ from 'lodash';

export enum LoadingType {
    Circular = <any>'circular',
    Linear = <any>'linear',
}

export enum LoadingMode {
    Determinate = 'determinate',
    Indeterminate = 'indeterminate',
}

export enum LoadingStrategy {
    Overlay = <any>'overlay',
    Replace = <any>'replace',
}

export enum LoadingStyle {
    FullScreen = <any>'fullscreen',
    Overlay = <any>'overlay',
    None = <any>'none',
}

@Component({
    selector: 'at-loading',
    styleUrls: ['./at-loading.component.scss'],
    templateUrl: './at-loading.component.html',
    animations: [
        AtFadeOpacityAnimation(),
        AtFadeInOutAnimation()
    ],
})
export class AtLoadingComponent {

    private _animationIn: Subject<any> = new Subject<any>();
    private _animationOut: Subject<any> = new Subject<any>();
    private _mode: LoadingMode = LoadingMode.Indeterminate;
    private _defaultMode: LoadingMode = LoadingMode.Indeterminate;
    private _value: number = 0;
    private _message: any = false;

    /**
     * Flag for animation
     */
    animation: boolean = false;

    /**
     * Content injected into loading component.
     */
    content: TemplatePortal;

    /**
     * Sets mode of [AtLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     */
    set mode(mode: LoadingMode) {
        this._defaultMode = mode;
    }

    get mode(): LoadingMode {
        return this._mode;
    }

    /**
     * Sets loadingText of [AtLoadingComponent]
     */
    set message(message: any) {
        this._message = message;
    }

    get message(): any {
        return this._message;
    }

    /**
     * Sets value of [AtLoadingComponent] if mode is 'LoadingMode.Determinate'
     */
    set value(value: number) {
        this._value = value;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
    }

    get value(): number {
        return this._value;
    }

    style: LoadingStyle = LoadingStyle.None;

    /**
     * height: number
     * Sets height of [AtLoadingComponent].
     */
    height: number;

    /**
     * type: LoadingType
     * Sets type of [AtLoadingComponent] rendered.
     */
    type: LoadingType = LoadingType.Circular;

    /**
     * color: 'primary' | 'accent' | 'warn'
     * Sets theme color of [AtLoadingComponent] rendered.
     */
    color: 'primary' | 'accent' | 'warn' = 'primary';

    private _messages = [
        'Declaring Variables',
        'Counting to Ten',
        'Launching App',
        'Drawing Icons',
        'Clearing Screen',
        'Accelerating Disks',
        'Applying Filters',
        'Taking Screenshot',
        'Iterating Javascript',
        'Encrypting Lines',
        'Running Diagnostic',
        'Calculating Percentages',
        'Increasing Power',
        'Checking Sensors',
        'Programming PCI',
        'Determining USB Position',
        'Connecting to Bus',
        'Inverting Ports',
        'Bypassing Capacitor',
        'Testing AI',
        'Virtualizing Microchip',
        'Synthesizing Drivers',
        'Parsing System',
        'Navigating Arrays',
        'Searching Google',
        'Overflowing Stack',
        'Compiling Binaries',
        'Migrating CSS',
        'Rendering Dialogs',
        'Compressing Data',
        'Evaluating Weissman Score',
        'Purging Local Storage',
        'Leaking Memory',
        'Scripting Python',
        'Grunting Ruby',
        'Fluctuating Objects',
        'Testing Processor',
        'Debugging Prompts',
        'Connecting Floats',
        'Rounding Integers',
        'Caching Logs',
    ];

    /**
     * @internal use only
     * @type {boolean}
     */
    showingMessage = true;

    /**
     * @internal use only
     * @type {string}
     */
    theMessage = '';

    private _mrId = 0;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {
        this.theMessage = this.getTheMessage();
        if (_.isBoolean(this.message) && this.mode == LoadingMode.Indeterminate) {
            this._mrId = _.random(0, this._messages.length - 1);
        }
        this.showMessage();
    }

    /**
     * @internal use only
     * @returns {any}
     */
    getTheMessage() {

        if (_.isArray(this.message) && this.mode == LoadingMode.Indeterminate) {
            if (this._mrId > this.message.length - 1) {
                this._mrId = 0
            }

            const msg = this.message[this._mrId];
            this._mrId++;

            return msg;
        }

        if (_.isBoolean(this.message) && this.mode == LoadingMode.Indeterminate) {
            if (this._mrId > this._messages.length - 1) {
                this._mrId = 0
            }

            const msg = this._messages[this._mrId];
            this._mrId++;

            return msg;
        }

        if (_.isString(this.message) && this.mode == LoadingMode.Indeterminate) {
            return this.message;
        }


    }

    /**
     * @internal use only
     */
    showMessage() {
        if (_.isBoolean(this.message) && this.mode == LoadingMode.Indeterminate) {
            this.rotateMessages()
        }
    }

    /**
     * @internal use only
     */
    rotateMessages() {
        if (_.isArray(this.message) || _.isBoolean(this.message)) {
            this.showingMessage = !this.showingMessage;
            setTimeout(() => {
                this.theMessage = this.getTheMessage();
                this.showingMessage = !this.showingMessage;
                // if (this.i < 2) this.i++; else this.i = 0;
                setTimeout(() => {
                    this.rotateMessages();
                }, 2000);
            }, 350);
        }
    }

    getHeight(): string {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        } else {
            return this.height ? `${this.height}px` : '150px';
        }
    }

    getCircleDiameter(): string {
        if (this.height) {
            let diameter: number = this.height * (2 / 3);
            if (diameter < 80) {
                return `${diameter}px`;
            }
        }
        return '80px';
    }

    isCircular(): boolean {
        return this.type === LoadingType.Circular;
    }

    isLinear(): boolean {
        return this.type === LoadingType.Linear;
    }

    isFullScreen(): boolean {
        return this.style === LoadingStyle.FullScreen;
    }

    isOverlay(): boolean {
        return this.style === LoadingStyle.Overlay;
    }

    animationComplete(event: AnimationEvent): void {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        } else {
            this.outAnimationCompleted();
        }
    }

    inAnimationCompleted(): void {
        this._animationIn.next(undefined);
    }

    outAnimationCompleted(): void {
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        this._animationOut.next(undefined);
    }

    /**
     * Starts in animation and returns an observable for completion event.
     */
    startInAnimation(): Observable<any> {
        /* need to switch back to the selected mode, so we have saved it in another variable
         *  and then recover it. (issue with protractor)
         */
        this._mode = this._defaultMode;
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    }

    /**
     * Starts out animation and returns an observable for completion event.
     */
    startOutAnimation(): Observable<any> {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
         * inside md-progress-spinner stops and protractor doesnt timeout waiting to sync.
         */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    }
}
