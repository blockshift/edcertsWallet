import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'at-prompt-dialog',
  templateUrl: './at-prompt.component.html',
  styleUrls: ['./at-prompt.component.scss' ],
})
export class AtPromptDialogComponent implements AfterViewInit {
  title: string;
  message: string;
  value: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  @ViewChild('input') _input: ElementRef;

  constructor(private _dialogRef: MdDialogRef<AtPromptDialogComponent>) {}

  ngAfterViewInit(): void {
    // focus input once everything is rendered and good to go
    Promise.resolve().then(() => {
      (<HTMLInputElement>this._input.nativeElement).focus();
    });
  }

  /**
   * Method executed when input is focused
   * Selects all text
   */
  handleInputFocus(): void {
    (<HTMLInputElement>this._input.nativeElement).select();
  }

  cancel(): void {
    this._dialogRef.close(undefined);
  }

  accept(): void {
    this._dialogRef.close(this.value);
  }
}
