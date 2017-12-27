import { Component, Input, Output } from '@angular/core';
import { OnDestroy, AfterContentInit } from '@angular/core';
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { AtStepComponent } from './at-step.component';

export interface IStepChangeEvent {
  newStep: AtStepComponent;
  prevStep: AtStepComponent;
}

export enum StepMode {
  Vertical = <any>'vertical',
  Horizontal = <any>'horizontal',
}

@Component({
  selector: 'at-steps',
  styleUrls: ['./at-steps.component.scss' ],
  templateUrl: './at-steps.component.html',
})
export class AtStepsComponent implements OnDestroy, AfterContentInit {

  private _subcriptions: Subscription[];
  private _mode: StepMode = StepMode.Vertical;
  private _steps: QueryList<AtStepComponent>;

  @ContentChildren(AtStepComponent)
  set stepsContent(steps: QueryList<AtStepComponent>) {
    if (steps) {
      this._steps = steps;
      this._registerSteps();
    }
  }

  get steps(): AtStepComponent[] {
    return this._steps.toArray();
  }
  prevStep: AtStepComponent;

  /**
   * mode?: StepMode or ["vertical" | "horizontal"]
   * Defines if the mode of the [AtStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
   */
  @Input('mode')
  set mode(mode: StepMode) {
    switch (mode) {
      case StepMode.Horizontal:
        this._mode = StepMode.Horizontal;
        break;
      default:
        this._mode = StepMode.Vertical;
    }
  }
  get mode(): StepMode {
    return this._mode;
  }

  /**
   * stepChange?: function
   * Method to be executed when [onStepChange] event is emitted.
   * Emits an [IStepChangeEvent] implemented object.
   */
  @Output('stepChange') onStepChange: EventEmitter<IStepChangeEvent> = new EventEmitter<IStepChangeEvent>();

  /**
   * Executed after content is initialized, loops through any [AtStepComponent] children elements,
   * assigns them a number and subscribes as an observer to their [onActivated] event.
   */
  ngAfterContentInit(): void {
    this._registerSteps();
  }

  /**
   * Unsubscribes from [AtStepComponent] children elements when component is destroyed.
   */
  ngOnDestroy(): void {
    this._deregisterSteps();
  }

  /**
   * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
   */
  isHorizontal(): boolean {
    return this._mode === StepMode.Horizontal;
  }

  /**
   * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
   */
  isVertical(): boolean {
    return this._mode === StepMode.Vertical;
  }

  areStepsActive(): boolean {
    return this._steps.filter((step: AtStepComponent) => {
      return step.active;
    }).length > 0;
  }

  /**
   * Wraps previous and new [AtStepComponent] numbers in an object that implements [IStepChangeEvent]
   * and emits [onStepChange] event.
   */
  private _onStepSelection(step: AtStepComponent): void {
    if (this.prevStep !== step) {
      let prevStep: AtStepComponent = this.prevStep;
      this.prevStep = step;
      let event: IStepChangeEvent = {
        newStep: step,
        prevStep: prevStep,
      };
      this._deactivateAllBut(step);
      this.onStepChange.emit(event);
    }
  }

  /**
   * Loops through [AtStepComponent] children elements and deactivates them ignoring the one passed as an argument.
   */
  private _deactivateAllBut(activeStep: AtStepComponent): void {
    this._steps.filter((step: AtStepComponent) => step !== activeStep)
    .forEach((step: AtStepComponent) => {
      step.active = false;
    });
  }

  private _registerSteps(): void {
    this._subcriptions = [];
    this._steps.toArray().forEach((step: AtStepComponent) => {
      let subscription: Subscription = step.onActivated.asObservable().subscribe(() => {
        this._onStepSelection(step);
      });
      this._subcriptions.push(subscription);
    });
  }

  private _deregisterSteps(): void {
    if (this._subcriptions) {
      this._subcriptions.forEach((subs: Subscription) => {
        subs.unsubscribe();
      });
      this._subcriptions = undefined;
    }
  }
}
